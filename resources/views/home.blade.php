@extends('layouts.app')

@section('content')
  <div class="container" id="vue-app">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">VueJS Quiz</div>
          <div class="panel-body">
            <p>Check all boxes for true answers</p>


            <ul class="list-group">
              <!--suppress JSUnusedLocalSymbols -->
              <li v-for="quest in questions" class="list-group-item">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input type="checkbox" :name="quest.id" v-model="quest.checked">
                <label :for="quest.id">@{{quest.text}}</label>
              </li>
            </ul>

            <!-- Will take time, to make Bootstrap's disabled state look better -->
            <button id="btn" type="button" class="btn btn-primary" aria-pressed="false"
                    @click="currentView='chart';" onclick="this.disabled=true;">Check Results
            </button>

          </div>  <!-- panel-body -->
        </div>      <!-- panel-default -->
      </div>        <!-- col-md-8 -->
    </div>          <!-- row -->

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <!--suppress HtmlUnknownTag -->
        <component :is="currentView" :data="{
        labels: ['right', 'wrong'],
        datasets: [
          {
            label: 'Correct Answers',
            backgroundColor: ['#00ff00', '#ff0000'],
            data: [$data.countCorrect(), $data.questions.length - $data.countCorrect()]
          }
        ],
      }"></component>
      </div>        <!-- col-md-8 -->
    </div>          <!-- row -->
  </div>            <!-- container -->
@endsection
