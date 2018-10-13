/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7133.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 4.0], [0.6, 4.0], [0.7, 5.0], [0.8, 6.0], [0.9, 6.0], [1.0, 7.0], [1.1, 8.0], [1.2, 8.0], [1.3, 9.0], [1.4, 10.0], [1.5, 10.0], [1.6, 11.0], [1.7, 11.0], [1.8, 12.0], [1.9, 12.0], [2.0, 13.0], [2.1, 13.0], [2.2, 14.0], [2.3, 14.0], [2.4, 15.0], [2.5, 15.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 18.0], [3.6, 19.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 19.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 20.0], [4.8, 20.0], [4.9, 20.0], [5.0, 20.0], [5.1, 20.0], [5.2, 20.0], [5.3, 21.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 22.0], [6.9, 22.0], [7.0, 22.0], [7.1, 22.0], [7.2, 22.0], [7.3, 22.0], [7.4, 22.0], [7.5, 22.0], [7.6, 22.0], [7.7, 22.0], [7.8, 22.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 23.0], [8.9, 23.0], [9.0, 23.0], [9.1, 23.0], [9.2, 23.0], [9.3, 23.0], [9.4, 23.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 23.0], [10.4, 23.0], [10.5, 23.0], [10.6, 23.0], [10.7, 23.0], [10.8, 23.0], [10.9, 23.0], [11.0, 23.0], [11.1, 23.0], [11.2, 23.0], [11.3, 23.0], [11.4, 23.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 24.0], [12.1, 24.0], [12.2, 24.0], [12.3, 24.0], [12.4, 24.0], [12.5, 24.0], [12.6, 24.0], [12.7, 24.0], [12.8, 24.0], [12.9, 24.0], [13.0, 24.0], [13.1, 24.0], [13.2, 24.0], [13.3, 24.0], [13.4, 24.0], [13.5, 24.0], [13.6, 24.0], [13.7, 24.0], [13.8, 24.0], [13.9, 24.0], [14.0, 24.0], [14.1, 24.0], [14.2, 24.0], [14.3, 24.0], [14.4, 24.0], [14.5, 24.0], [14.6, 24.0], [14.7, 24.0], [14.8, 24.0], [14.9, 24.0], [15.0, 24.0], [15.1, 25.0], [15.2, 25.0], [15.3, 25.0], [15.4, 25.0], [15.5, 25.0], [15.6, 25.0], [15.7, 25.0], [15.8, 25.0], [15.9, 25.0], [16.0, 25.0], [16.1, 25.0], [16.2, 25.0], [16.3, 25.0], [16.4, 25.0], [16.5, 25.0], [16.6, 25.0], [16.7, 25.0], [16.8, 25.0], [16.9, 25.0], [17.0, 25.0], [17.1, 25.0], [17.2, 25.0], [17.3, 25.0], [17.4, 25.0], [17.5, 25.0], [17.6, 25.0], [17.7, 25.0], [17.8, 25.0], [17.9, 25.0], [18.0, 25.0], [18.1, 25.0], [18.2, 25.0], [18.3, 25.0], [18.4, 25.0], [18.5, 25.0], [18.6, 25.0], [18.7, 25.0], [18.8, 25.0], [18.9, 25.0], [19.0, 25.0], [19.1, 25.0], [19.2, 25.0], [19.3, 25.0], [19.4, 25.0], [19.5, 25.0], [19.6, 25.0], [19.7, 26.0], [19.8, 26.0], [19.9, 26.0], [20.0, 26.0], [20.1, 26.0], [20.2, 26.0], [20.3, 26.0], [20.4, 26.0], [20.5, 26.0], [20.6, 26.0], [20.7, 26.0], [20.8, 26.0], [20.9, 26.0], [21.0, 26.0], [21.1, 26.0], [21.2, 26.0], [21.3, 26.0], [21.4, 26.0], [21.5, 26.0], [21.6, 26.0], [21.7, 26.0], [21.8, 26.0], [21.9, 26.0], [22.0, 26.0], [22.1, 26.0], [22.2, 26.0], [22.3, 26.0], [22.4, 26.0], [22.5, 26.0], [22.6, 26.0], [22.7, 26.0], [22.8, 26.0], [22.9, 26.0], [23.0, 26.0], [23.1, 26.0], [23.2, 26.0], [23.3, 26.0], [23.4, 26.0], [23.5, 26.0], [23.6, 26.0], [23.7, 26.0], [23.8, 26.0], [23.9, 26.0], [24.0, 26.0], [24.1, 26.0], [24.2, 26.0], [24.3, 26.0], [24.4, 26.0], [24.5, 26.0], [24.6, 26.0], [24.7, 26.0], [24.8, 26.0], [24.9, 26.0], [25.0, 26.0], [25.1, 27.0], [25.2, 27.0], [25.3, 27.0], [25.4, 27.0], [25.5, 27.0], [25.6, 27.0], [25.7, 27.0], [25.8, 27.0], [25.9, 27.0], [26.0, 27.0], [26.1, 27.0], [26.2, 27.0], [26.3, 27.0], [26.4, 27.0], [26.5, 27.0], [26.6, 27.0], [26.7, 27.0], [26.8, 27.0], [26.9, 27.0], [27.0, 27.0], [27.1, 27.0], [27.2, 27.0], [27.3, 27.0], [27.4, 27.0], [27.5, 27.0], [27.6, 27.0], [27.7, 27.0], [27.8, 27.0], [27.9, 27.0], [28.0, 27.0], [28.1, 27.0], [28.2, 27.0], [28.3, 27.0], [28.4, 27.0], [28.5, 27.0], [28.6, 27.0], [28.7, 27.0], [28.8, 27.0], [28.9, 27.0], [29.0, 27.0], [29.1, 27.0], [29.2, 27.0], [29.3, 27.0], [29.4, 27.0], [29.5, 27.0], [29.6, 27.0], [29.7, 27.0], [29.8, 27.0], [29.9, 27.0], [30.0, 27.0], [30.1, 27.0], [30.2, 27.0], [30.3, 27.0], [30.4, 27.0], [30.5, 27.0], [30.6, 27.0], [30.7, 27.0], [30.8, 27.0], [30.9, 27.0], [31.0, 27.0], [31.1, 28.0], [31.2, 28.0], [31.3, 28.0], [31.4, 28.0], [31.5, 28.0], [31.6, 28.0], [31.7, 28.0], [31.8, 28.0], [31.9, 28.0], [32.0, 28.0], [32.1, 28.0], [32.2, 28.0], [32.3, 28.0], [32.4, 28.0], [32.5, 28.0], [32.6, 28.0], [32.7, 28.0], [32.8, 28.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 28.0], [33.3, 28.0], [33.4, 28.0], [33.5, 28.0], [33.6, 28.0], [33.7, 28.0], [33.8, 28.0], [33.9, 28.0], [34.0, 28.0], [34.1, 28.0], [34.2, 28.0], [34.3, 28.0], [34.4, 28.0], [34.5, 28.0], [34.6, 28.0], [34.7, 28.0], [34.8, 28.0], [34.9, 28.0], [35.0, 28.0], [35.1, 28.0], [35.2, 28.0], [35.3, 28.0], [35.4, 28.0], [35.5, 28.0], [35.6, 28.0], [35.7, 28.0], [35.8, 28.0], [35.9, 28.0], [36.0, 28.0], [36.1, 28.0], [36.2, 28.0], [36.3, 28.0], [36.4, 28.0], [36.5, 28.0], [36.6, 28.0], [36.7, 28.0], [36.8, 28.0], [36.9, 28.0], [37.0, 28.0], [37.1, 28.0], [37.2, 28.0], [37.3, 28.0], [37.4, 28.0], [37.5, 28.0], [37.6, 28.0], [37.7, 28.0], [37.8, 29.0], [37.9, 29.0], [38.0, 29.0], [38.1, 29.0], [38.2, 29.0], [38.3, 29.0], [38.4, 29.0], [38.5, 29.0], [38.6, 29.0], [38.7, 29.0], [38.8, 29.0], [38.9, 29.0], [39.0, 29.0], [39.1, 29.0], [39.2, 29.0], [39.3, 29.0], [39.4, 29.0], [39.5, 29.0], [39.6, 29.0], [39.7, 29.0], [39.8, 29.0], [39.9, 29.0], [40.0, 29.0], [40.1, 29.0], [40.2, 29.0], [40.3, 29.0], [40.4, 29.0], [40.5, 29.0], [40.6, 29.0], [40.7, 29.0], [40.8, 29.0], [40.9, 29.0], [41.0, 29.0], [41.1, 29.0], [41.2, 29.0], [41.3, 29.0], [41.4, 29.0], [41.5, 29.0], [41.6, 29.0], [41.7, 29.0], [41.8, 29.0], [41.9, 29.0], [42.0, 29.0], [42.1, 29.0], [42.2, 29.0], [42.3, 29.0], [42.4, 29.0], [42.5, 29.0], [42.6, 29.0], [42.7, 29.0], [42.8, 29.0], [42.9, 29.0], [43.0, 29.0], [43.1, 29.0], [43.2, 29.0], [43.3, 29.0], [43.4, 29.0], [43.5, 29.0], [43.6, 29.0], [43.7, 29.0], [43.8, 29.0], [43.9, 29.0], [44.0, 29.0], [44.1, 29.0], [44.2, 29.0], [44.3, 29.0], [44.4, 29.0], [44.5, 29.0], [44.6, 29.0], [44.7, 29.0], [44.8, 29.0], [44.9, 29.0], [45.0, 30.0], [45.1, 30.0], [45.2, 30.0], [45.3, 30.0], [45.4, 30.0], [45.5, 30.0], [45.6, 30.0], [45.7, 30.0], [45.8, 30.0], [45.9, 30.0], [46.0, 30.0], [46.1, 30.0], [46.2, 30.0], [46.3, 30.0], [46.4, 30.0], [46.5, 30.0], [46.6, 30.0], [46.7, 30.0], [46.8, 30.0], [46.9, 30.0], [47.0, 30.0], [47.1, 30.0], [47.2, 30.0], [47.3, 30.0], [47.4, 30.0], [47.5, 30.0], [47.6, 30.0], [47.7, 30.0], [47.8, 30.0], [47.9, 30.0], [48.0, 30.0], [48.1, 30.0], [48.2, 30.0], [48.3, 30.0], [48.4, 30.0], [48.5, 30.0], [48.6, 30.0], [48.7, 30.0], [48.8, 30.0], [48.9, 30.0], [49.0, 30.0], [49.1, 30.0], [49.2, 30.0], [49.3, 30.0], [49.4, 30.0], [49.5, 30.0], [49.6, 30.0], [49.7, 30.0], [49.8, 30.0], [49.9, 30.0], [50.0, 30.0], [50.1, 30.0], [50.2, 30.0], [50.3, 30.0], [50.4, 30.0], [50.5, 30.0], [50.6, 30.0], [50.7, 30.0], [50.8, 30.0], [50.9, 30.0], [51.0, 30.0], [51.1, 30.0], [51.2, 30.0], [51.3, 30.0], [51.4, 30.0], [51.5, 30.0], [51.6, 30.0], [51.7, 30.0], [51.8, 30.0], [51.9, 30.0], [52.0, 30.0], [52.1, 30.0], [52.2, 30.0], [52.3, 30.0], [52.4, 30.0], [52.5, 31.0], [52.6, 31.0], [52.7, 31.0], [52.8, 31.0], [52.9, 31.0], [53.0, 31.0], [53.1, 31.0], [53.2, 31.0], [53.3, 31.0], [53.4, 31.0], [53.5, 31.0], [53.6, 31.0], [53.7, 31.0], [53.8, 31.0], [53.9, 31.0], [54.0, 31.0], [54.1, 31.0], [54.2, 31.0], [54.3, 31.0], [54.4, 31.0], [54.5, 31.0], [54.6, 31.0], [54.7, 31.0], [54.8, 31.0], [54.9, 31.0], [55.0, 31.0], [55.1, 31.0], [55.2, 31.0], [55.3, 31.0], [55.4, 31.0], [55.5, 31.0], [55.6, 31.0], [55.7, 31.0], [55.8, 31.0], [55.9, 31.0], [56.0, 31.0], [56.1, 31.0], [56.2, 31.0], [56.3, 31.0], [56.4, 31.0], [56.5, 31.0], [56.6, 31.0], [56.7, 31.0], [56.8, 31.0], [56.9, 31.0], [57.0, 31.0], [57.1, 31.0], [57.2, 31.0], [57.3, 31.0], [57.4, 31.0], [57.5, 31.0], [57.6, 31.0], [57.7, 31.0], [57.8, 31.0], [57.9, 31.0], [58.0, 31.0], [58.1, 31.0], [58.2, 31.0], [58.3, 31.0], [58.4, 31.0], [58.5, 31.0], [58.6, 31.0], [58.7, 31.0], [58.8, 31.0], [58.9, 31.0], [59.0, 31.0], [59.1, 31.0], [59.2, 31.0], [59.3, 31.0], [59.4, 31.0], [59.5, 31.0], [59.6, 31.0], [59.7, 31.0], [59.8, 32.0], [59.9, 32.0], [60.0, 32.0], [60.1, 32.0], [60.2, 32.0], [60.3, 32.0], [60.4, 32.0], [60.5, 32.0], [60.6, 32.0], [60.7, 32.0], [60.8, 32.0], [60.9, 32.0], [61.0, 32.0], [61.1, 32.0], [61.2, 32.0], [61.3, 32.0], [61.4, 32.0], [61.5, 32.0], [61.6, 32.0], [61.7, 32.0], [61.8, 32.0], [61.9, 32.0], [62.0, 32.0], [62.1, 32.0], [62.2, 32.0], [62.3, 32.0], [62.4, 32.0], [62.5, 32.0], [62.6, 32.0], [62.7, 32.0], [62.8, 32.0], [62.9, 32.0], [63.0, 32.0], [63.1, 32.0], [63.2, 32.0], [63.3, 32.0], [63.4, 32.0], [63.5, 32.0], [63.6, 32.0], [63.7, 32.0], [63.8, 32.0], [63.9, 32.0], [64.0, 32.0], [64.1, 32.0], [64.2, 32.0], [64.3, 32.0], [64.4, 32.0], [64.5, 32.0], [64.6, 32.0], [64.7, 32.0], [64.8, 32.0], [64.9, 32.0], [65.0, 32.0], [65.1, 32.0], [65.2, 32.0], [65.3, 32.0], [65.4, 32.0], [65.5, 32.0], [65.6, 32.0], [65.7, 32.0], [65.8, 32.0], [65.9, 32.0], [66.0, 32.0], [66.1, 32.0], [66.2, 32.0], [66.3, 32.0], [66.4, 32.0], [66.5, 32.0], [66.6, 32.0], [66.7, 32.0], [66.8, 33.0], [66.9, 33.0], [67.0, 33.0], [67.1, 33.0], [67.2, 33.0], [67.3, 33.0], [67.4, 33.0], [67.5, 33.0], [67.6, 33.0], [67.7, 33.0], [67.8, 33.0], [67.9, 33.0], [68.0, 33.0], [68.1, 33.0], [68.2, 33.0], [68.3, 33.0], [68.4, 33.0], [68.5, 33.0], [68.6, 33.0], [68.7, 33.0], [68.8, 33.0], [68.9, 33.0], [69.0, 33.0], [69.1, 33.0], [69.2, 33.0], [69.3, 33.0], [69.4, 33.0], [69.5, 33.0], [69.6, 33.0], [69.7, 33.0], [69.8, 33.0], [69.9, 33.0], [70.0, 33.0], [70.1, 33.0], [70.2, 33.0], [70.3, 33.0], [70.4, 33.0], [70.5, 33.0], [70.6, 33.0], [70.7, 33.0], [70.8, 33.0], [70.9, 33.0], [71.0, 33.0], [71.1, 33.0], [71.2, 33.0], [71.3, 33.0], [71.4, 33.0], [71.5, 33.0], [71.6, 33.0], [71.7, 33.0], [71.8, 33.0], [71.9, 33.0], [72.0, 33.0], [72.1, 33.0], [72.2, 33.0], [72.3, 33.0], [72.4, 33.0], [72.5, 33.0], [72.6, 33.0], [72.7, 33.0], [72.8, 33.0], [72.9, 33.0], [73.0, 33.0], [73.1, 33.0], [73.2, 34.0], [73.3, 34.0], [73.4, 34.0], [73.5, 34.0], [73.6, 34.0], [73.7, 34.0], [73.8, 34.0], [73.9, 34.0], [74.0, 34.0], [74.1, 34.0], [74.2, 34.0], [74.3, 34.0], [74.4, 34.0], [74.5, 34.0], [74.6, 34.0], [74.7, 34.0], [74.8, 34.0], [74.9, 34.0], [75.0, 34.0], [75.1, 34.0], [75.2, 34.0], [75.3, 34.0], [75.4, 34.0], [75.5, 34.0], [75.6, 34.0], [75.7, 34.0], [75.8, 34.0], [75.9, 34.0], [76.0, 34.0], [76.1, 34.0], [76.2, 34.0], [76.3, 34.0], [76.4, 34.0], [76.5, 34.0], [76.6, 34.0], [76.7, 34.0], [76.8, 34.0], [76.9, 34.0], [77.0, 34.0], [77.1, 34.0], [77.2, 34.0], [77.3, 34.0], [77.4, 34.0], [77.5, 34.0], [77.6, 34.0], [77.7, 34.0], [77.8, 34.0], [77.9, 34.0], [78.0, 34.0], [78.1, 34.0], [78.2, 34.0], [78.3, 34.0], [78.4, 34.0], [78.5, 34.0], [78.6, 34.0], [78.7, 34.0], [78.8, 35.0], [78.9, 35.0], [79.0, 35.0], [79.1, 35.0], [79.2, 35.0], [79.3, 35.0], [79.4, 35.0], [79.5, 35.0], [79.6, 35.0], [79.7, 35.0], [79.8, 35.0], [79.9, 35.0], [80.0, 35.0], [80.1, 35.0], [80.2, 35.0], [80.3, 35.0], [80.4, 35.0], [80.5, 35.0], [80.6, 35.0], [80.7, 35.0], [80.8, 35.0], [80.9, 35.0], [81.0, 35.0], [81.1, 35.0], [81.2, 35.0], [81.3, 35.0], [81.4, 35.0], [81.5, 35.0], [81.6, 35.0], [81.7, 35.0], [81.8, 35.0], [81.9, 35.0], [82.0, 35.0], [82.1, 35.0], [82.2, 35.0], [82.3, 35.0], [82.4, 35.0], [82.5, 35.0], [82.6, 35.0], [82.7, 35.0], [82.8, 35.0], [82.9, 35.0], [83.0, 35.0], [83.1, 35.0], [83.2, 35.0], [83.3, 35.0], [83.4, 35.0], [83.5, 36.0], [83.6, 36.0], [83.7, 36.0], [83.8, 36.0], [83.9, 36.0], [84.0, 36.0], [84.1, 36.0], [84.2, 36.0], [84.3, 36.0], [84.4, 36.0], [84.5, 36.0], [84.6, 36.0], [84.7, 36.0], [84.8, 36.0], [84.9, 36.0], [85.0, 36.0], [85.1, 36.0], [85.2, 36.0], [85.3, 36.0], [85.4, 36.0], [85.5, 36.0], [85.6, 36.0], [85.7, 36.0], [85.8, 36.0], [85.9, 36.0], [86.0, 36.0], [86.1, 36.0], [86.2, 36.0], [86.3, 36.0], [86.4, 36.0], [86.5, 36.0], [86.6, 36.0], [86.7, 36.0], [86.8, 36.0], [86.9, 36.0], [87.0, 36.0], [87.1, 36.0], [87.2, 36.0], [87.3, 37.0], [87.4, 37.0], [87.5, 37.0], [87.6, 37.0], [87.7, 37.0], [87.8, 37.0], [87.9, 37.0], [88.0, 37.0], [88.1, 37.0], [88.2, 37.0], [88.3, 37.0], [88.4, 37.0], [88.5, 37.0], [88.6, 37.0], [88.7, 37.0], [88.8, 37.0], [88.9, 37.0], [89.0, 37.0], [89.1, 37.0], [89.2, 37.0], [89.3, 37.0], [89.4, 37.0], [89.5, 37.0], [89.6, 37.0], [89.7, 37.0], [89.8, 37.0], [89.9, 37.0], [90.0, 37.0], [90.1, 37.0], [90.2, 37.0], [90.3, 38.0], [90.4, 38.0], [90.5, 38.0], [90.6, 38.0], [90.7, 38.0], [90.8, 38.0], [90.9, 38.0], [91.0, 38.0], [91.1, 38.0], [91.2, 38.0], [91.3, 38.0], [91.4, 38.0], [91.5, 38.0], [91.6, 38.0], [91.7, 38.0], [91.8, 38.0], [91.9, 38.0], [92.0, 38.0], [92.1, 38.0], [92.2, 38.0], [92.3, 38.0], [92.4, 39.0], [92.5, 39.0], [92.6, 39.0], [92.7, 39.0], [92.8, 39.0], [92.9, 39.0], [93.0, 39.0], [93.1, 39.0], [93.2, 39.0], [93.3, 39.0], [93.4, 39.0], [93.5, 39.0], [93.6, 39.0], [93.7, 39.0], [93.8, 39.0], [93.9, 39.0], [94.0, 40.0], [94.1, 40.0], [94.2, 40.0], [94.3, 40.0], [94.4, 40.0], [94.5, 40.0], [94.6, 40.0], [94.7, 40.0], [94.8, 40.0], [94.9, 40.0], [95.0, 41.0], [95.1, 41.0], [95.2, 41.0], [95.3, 41.0], [95.4, 41.0], [95.5, 41.0], [95.6, 41.0], [95.7, 42.0], [95.8, 42.0], [95.9, 42.0], [96.0, 42.0], [96.1, 42.0], [96.2, 43.0], [96.3, 43.0], [96.4, 43.0], [96.5, 44.0], [96.6, 44.0], [96.7, 45.0], [96.8, 45.0], [96.9, 46.0], [97.0, 47.0], [97.1, 49.0], [97.2, 52.0], [97.3, 57.0], [97.4, 63.0], [97.5, 70.0], [97.6, 75.0], [97.7, 81.0], [97.8, 87.0], [97.9, 92.0], [98.0, 97.0], [98.1, 103.0], [98.2, 110.0], [98.3, 120.0], [98.4, 134.0], [98.5, 226.0], [98.6, 234.0], [98.7, 1019.0], [98.8, 1026.0], [98.9, 1028.0], [99.0, 1029.0], [99.1, 1031.0], [99.2, 1032.0], [99.3, 1033.0], [99.4, 1034.0], [99.5, 1035.0], [99.6, 1037.0], [99.7, 1038.0], [99.8, 1043.0], [99.9, 1238.0], [100.0, 7133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1960842.0, "series": [{"data": [[0.0, 1960842.0], [2600.0, 9.0], [3000.0, 1342.0], [3100.0, 6.0], [200.0, 3947.0], [3200.0, 92.0], [3300.0, 2.0], [800.0, 13.0], [3400.0, 22.0], [3800.0, 5.0], [1000.0, 23400.0], [1100.0, 133.0], [300.0, 20.0], [1200.0, 1288.0], [1300.0, 11.0], [1400.0, 170.0], [1500.0, 1.0], [100.0, 8327.0], [400.0, 219.0], [7000.0, 117.0], [7100.0, 1.0], [1800.0, 28.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 118.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1973357.0, "series": [{"data": [[0.0, 1973357.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25018.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1507.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 118.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 159.43187881643627, "minX": 1.53941664E12, "maxY": 200.0, "series": [{"data": [[1.53941664E12, 180.0597555454966], [1.53941712E12, 159.43187881643627], [1.53941682E12, 200.0], [1.539417E12, 200.0], [1.5394167E12, 200.0], [1.53941688E12, 200.0], [1.53941706E12, 200.0], [1.53941676E12, 200.0], [1.53941694E12, 200.0]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941712E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.4634146341463414, "minX": 1.0, "maxY": 58.79867986798681, "series": [{"data": [[2.0, 0.6330275229357794], [3.0, 0.8857142857142857], [4.0, 0.830508474576271], [5.0, 0.9333333333333333], [6.0, 1.2957746478873242], [7.0, 1.8666666666666665], [8.0, 1.7741935483870965], [9.0, 1.9193037974683538], [10.0, 2.326086956521739], [11.0, 3.222222222222222], [12.0, 5.116666666666667], [13.0, 3.561797752808989], [14.0, 3.3710691823899386], [15.0, 4.628865979381444], [16.0, 3.9179487179487205], [17.0, 4.205714285714285], [18.0, 4.397435897435898], [19.0, 4.948207171314742], [20.0, 5.967391304347827], [21.0, 4.983713355048857], [22.0, 6.153846153846153], [23.0, 6.617486338797814], [24.0, 6.238095238095238], [25.0, 5.836956521739128], [26.0, 5.806451612903226], [27.0, 7.127358490566035], [28.0, 6.83892617449664], [29.0, 7.029962546816477], [30.0, 5.0783699059561105], [31.0, 6.222891566265059], [32.0, 7.745874587458746], [33.0, 13.473684210526313], [34.0, 6.999999999999999], [35.0, 8.603658536585362], [36.0, 10.588888888888885], [37.0, 11.282608695652172], [38.0, 9.774193548387096], [39.0, 9.93650793650793], [40.0, 9.173913043478262], [41.0, 11.598684210526313], [42.0, 9.304878048780497], [43.0, 9.17610062893082], [44.0, 6.018867924528301], [45.0, 11.454094292803982], [46.0, 8.38247011952191], [47.0, 10.534229828850854], [48.0, 12.40909090909091], [49.0, 12.364999999999997], [50.0, 13.131274131274145], [51.0, 15.475728155339805], [52.0, 9.755555555555548], [53.0, 10.745762711864415], [54.0, 10.024489795918369], [55.0, 14.464028776978418], [56.0, 12.96363636363636], [57.0, 14.354166666666666], [58.0, 22.25352112676056], [59.0, 18.463855421686738], [60.0, 17.31088082901554], [61.0, 15.600000000000001], [62.0, 14.138888888888895], [63.0, 14.566287878787874], [64.0, 14.286956521739125], [65.0, 15.498652291105117], [66.0, 12.252609603340295], [67.0, 14.85974499089253], [68.0, 17.837500000000006], [69.0, 17.759090909090922], [70.0, 13.75313059033987], [71.0, 13.912181303116146], [72.0, 16.91666666666669], [73.0, 13.752777777777784], [74.0, 23.297577854671275], [75.0, 18.1766004415011], [76.0, 17.87220447284344], [77.0, 21.544642857142843], [78.0, 22.47826086956522], [79.0, 22.168421052631572], [80.0, 19.358024691358032], [81.0, 22.40869565217392], [82.0, 21.95205479452054], [83.0, 26.674698795180724], [84.0, 20.917968750000007], [85.0, 24.29353233830844], [86.0, 25.97619047619047], [87.0, 22.771186440677965], [88.0, 16.840983606557376], [89.0, 17.361111111111136], [90.0, 24.733333333333338], [91.0, 15.653543307086608], [92.0, 24.79697986577182], [93.0, 16.811764705882357], [94.0, 21.286786786786802], [95.0, 19.149253731343286], [96.0, 21.877712031558207], [97.0, 21.759689922480632], [98.0, 23.91317365269458], [99.0, 21.49509366636933], [100.0, 25.21634241245137], [101.0, 28.27040314650934], [103.0, 24.17428571428571], [102.0, 30.807692307692292], [104.0, 21.899782135076247], [105.0, 18.314960629921263], [106.0, 21.040598290598275], [107.0, 26.110993657505293], [108.0, 29.387234042553178], [109.0, 24.414030261348003], [110.0, 26.39237057220709], [111.0, 27.59533073929961], [112.0, 30.941176470588236], [113.0, 30.354691075514904], [114.0, 28.13295615275813], [115.0, 21.847882454624024], [116.0, 28.94851794071763], [117.0, 25.357910906297988], [118.0, 17.795698924731184], [119.0, 26.386308068459645], [120.0, 23.7982456140351], [121.0, 46.38834951456312], [122.0, 30.504672897196254], [123.0, 34.90322580645162], [124.0, 26.596026490066254], [125.0, 37.29999999999999], [126.0, 32.5018587360595], [127.0, 36.26719576719577], [128.0, 29.935221101629182], [129.0, 36.60431654676259], [130.0, 29.88272583201267], [131.0, 37.26470588235293], [132.0, 36.8404255319149], [133.0, 40.19696969696972], [134.0, 30.64428312159711], [135.0, 32.74074074074073], [136.0, 40.8275862068966], [137.0, 37.935514918190584], [138.0, 32.97273718647769], [139.0, 46.43441226575804], [140.0, 30.605263157894733], [141.0, 26.517037037037035], [142.0, 24.13793103448276], [143.0, 29.19521912350597], [144.0, 31.575059952038465], [145.0, 35.28353658536587], [146.0, 31.843822843822853], [147.0, 35.91666666666664], [148.0, 33.42616033755275], [149.0, 37.75360419397114], [150.0, 28.95057034220531], [151.0, 28.77500000000001], [152.0, 32.03048780487802], [153.0, 30.118195956454112], [154.0, 36.00319318786598], [155.0, 37.29944547134934], [156.0, 30.463058419243964], [158.0, 38.69150737962748], [159.0, 35.21200345423143], [157.0, 37.657894736842124], [160.0, 36.65225563909769], [161.0, 41.16279069767443], [162.0, 37.43206256109477], [163.0, 33.24803149606296], [164.0, 44.95205479452056], [165.0, 32.100346020761215], [166.0, 51.0046511627907], [167.0, 47.904887714663076], [168.0, 21.659999999999993], [169.0, 44.773248407643315], [170.0, 41.75921052631576], [171.0, 35.530069930069935], [172.0, 38.68468468468469], [173.0, 42.81926546391746], [174.0, 39.11881188118812], [175.0, 44.93147590361446], [176.0, 41.080194949047474], [177.0, 49.1526627218935], [178.0, 47.489966555183926], [179.0, 31.11984536082472], [180.0, 38.389265536723144], [181.0, 44.91299303944304], [182.0, 32.344176285414534], [183.0, 36.618032786885244], [184.0, 44.36446766819073], [185.0, 39.04301075268811], [186.0, 38.141475211608224], [187.0, 35.4747663551402], [188.0, 58.79867986798681], [189.0, 45.54109101267621], [190.0, 45.4570830425681], [191.0, 52.177664974619326], [192.0, 44.5708683473389], [193.0, 39.12707182320444], [194.0, 44.1576514100786], [195.0, 52.124763705104044], [196.0, 41.42761760242796], [197.0, 39.439278937381346], [198.0, 45.30931088900583], [199.0, 48.32795835449471], [200.0, 47.12837866440894], [1.0, 0.4634146341463414]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[196.1536729999847, 46.20574599999969]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 125911.1, "minX": 1.53941664E12, "maxY": 3624620.8333333335, "series": [{"data": [[1.53941664E12, 933332.8166666667], [1.53941712E12, 2212013.8], [1.53941682E12, 3535813.2666666666], [1.539417E12, 3584249.4], [1.5394167E12, 3567757.6], [1.53941688E12, 3506848.3666666667], [1.53941706E12, 3624620.8333333335], [1.53941676E12, 3609420.4], [1.53941694E12, 3596187.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53941664E12, 125911.1], [1.53941712E12, 298383.6], [1.53941682E12, 476877.2], [1.539417E12, 483519.6], [1.5394167E12, 481216.8], [1.53941688E12, 473035.4], [1.53941706E12, 488942.2], [1.53941676E12, 486825.6], [1.53941694E12, 485064.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941712E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 37.19204589592018, "minX": 1.53941664E12, "maxY": 47.9813759393368, "series": [{"data": [[1.53941664E12, 42.91548211860593], [1.53941712E12, 37.19204589592018], [1.53941682E12, 47.72946711711051], [1.539417E12, 47.00271916381766], [1.5394167E12, 47.213536998946395], [1.53941688E12, 47.9813759393368], [1.53941706E12, 46.42035687085178], [1.53941676E12, 46.605779624968726], [1.53941694E12, 46.962724331608165]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941712E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 36.80366250453674, "minX": 1.53941664E12, "maxY": 47.54149546748884, "series": [{"data": [[1.53941664E12, 42.60037724460499], [1.53941712E12, 36.80366250453674], [1.53941682E12, 46.98555447548245], [1.539417E12, 46.76410860937508], [1.5394167E12, 46.6120785973449], [1.53941688E12, 47.54149546748884], [1.53941706E12, 46.07386496106374], [1.53941676E12, 45.961560225565655], [1.53941694E12, 46.42026289196939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941712E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9.900764719740724, "minX": 1.53941664E12, "maxY": 16.49222347935627, "series": [{"data": [[1.53941664E12, 14.63191489361703], [1.53941712E12, 9.900764719740724], [1.53941682E12, 16.49222347935627], [1.539417E12, 16.17177492239353], [1.5394167E12, 16.39384344489149], [1.53941688E12, 16.467545455640824], [1.53941706E12, 15.969006947790858], [1.53941676E12, 16.021022849226327], [1.53941694E12, 16.232188599136567]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941712E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.53941664E12, "maxY": 3843.0, "series": [{"data": [[1.53941664E12, 3446.0], [1.53941712E12, 3442.0], [1.53941682E12, 3445.0], [1.539417E12, 3843.0], [1.5394167E12, 3439.0], [1.53941688E12, 3245.0], [1.53941706E12, 3436.0], [1.53941676E12, 3838.0], [1.53941694E12, 3838.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53941664E12, 0.0], [1.53941712E12, 0.0], [1.53941682E12, 0.0], [1.539417E12, 0.0], [1.5394167E12, 0.0], [1.53941688E12, 0.0], [1.53941706E12, 0.0], [1.53941676E12, 0.0], [1.53941694E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53941664E12, 44.0], [1.53941712E12, 20.0], [1.53941682E12, 38.0], [1.539417E12, 35.0], [1.5394167E12, 36.0], [1.53941688E12, 37.0], [1.53941706E12, 37.0], [1.53941676E12, 37.0], [1.53941694E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53941664E12, 1026.0], [1.53941712E12, 28.0], [1.53941682E12, 1030.0], [1.539417E12, 1028.0], [1.5394167E12, 1029.9900000000016], [1.53941688E12, 1031.0], [1.53941706E12, 1029.0], [1.53941676E12, 1030.0], [1.53941694E12, 1030.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53941664E12, 50.0], [1.53941712E12, 22.0], [1.53941682E12, 41.0], [1.539417E12, 37.0], [1.5394167E12, 39.0], [1.53941688E12, 39.0], [1.53941706E12, 40.0], [1.53941676E12, 40.0], [1.53941694E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 24.0, "minX": 1000.0, "maxY": 7019.0, "series": [{"data": [[9000.0, 25.0], [10000.0, 25.0], [11000.0, 24.0], [12000.0, 29.0], [13000.0, 61.0], [14000.0, 69.0], [15000.0, 70.0], [1000.0, 33.0], [16000.0, 71.0], [17000.0, 75.0], [18000.0, 81.0], [19000.0, 72.0], [20000.0, 71.0], [21000.0, 73.0], [22000.0, 73.5], [23000.0, 76.0], [24000.0, 76.5], [25000.0, 77.5], [27000.0, 89.0], [2000.0, 33.0], [33000.0, 73.0], [3000.0, 31.0], [4000.0, 28.0], [5000.0, 27.0], [6000.0, 26.0], [7000.0, 25.0], [8000.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5000.0, 7016.0], [3000.0, 7014.5], [6000.0, 7016.0], [7000.0, 7019.0], [2000.0, 7015.0], [4000.0, 7016.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 33000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 89.0, "series": [{"data": [[9000.0, 25.0], [10000.0, 24.0], [11000.0, 24.0], [12000.0, 29.0], [13000.0, 61.0], [14000.0, 69.0], [15000.0, 70.0], [1000.0, 33.0], [16000.0, 71.0], [17000.0, 75.0], [18000.0, 81.0], [19000.0, 72.0], [20000.0, 71.0], [21000.0, 73.0], [22000.0, 73.5], [23000.0, 76.0], [24000.0, 76.0], [25000.0, 77.0], [27000.0, 89.0], [2000.0, 33.0], [33000.0, 72.0], [3000.0, 31.0], [4000.0, 28.0], [5000.0, 27.0], [6000.0, 26.0], [7000.0, 25.0], [8000.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5000.0, 0.0], [3000.0, 0.0], [6000.0, 0.0], [7000.0, 0.0], [2000.0, 0.0], [4000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 33000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1107.8333333333333, "minX": 1.53941664E12, "maxY": 4289.166666666667, "series": [{"data": [[1.53941664E12, 1107.8333333333333], [1.53941712E12, 2614.1833333333334], [1.53941682E12, 4183.6], [1.539417E12, 4241.466666666666], [1.5394167E12, 4221.516666666666], [1.53941688E12, 4149.65], [1.53941706E12, 4289.166666666667], [1.53941676E12, 4270.683333333333], [1.53941694E12, 4255.233333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941712E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53941664E12, "maxY": 4288.966666666666, "series": [{"data": [[1.53941664E12, 1104.4833333333333], [1.53941712E12, 2617.4], [1.53941682E12, 4183.133333333333], [1.539417E12, 4241.4], [1.5394167E12, 4221.2], [1.53941688E12, 4149.433333333333], [1.53941706E12, 4288.966666666666], [1.53941676E12, 4270.4], [1.53941694E12, 4254.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.53941664E12, 0.016666666666666666], [1.53941712E12, 0.11666666666666667], [1.53941682E12, 0.4], [1.539417E12, 0.1], [1.5394167E12, 0.31666666666666665], [1.53941688E12, 0.21666666666666667], [1.53941706E12, 0.16666666666666666], [1.53941676E12, 0.35], [1.53941694E12, 0.2833333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941712E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53941664E12, "maxY": 4288.966666666666, "series": [{"data": [[1.53941664E12, 1104.4833333333333], [1.53941712E12, 2617.4], [1.53941682E12, 4183.133333333333], [1.539417E12, 4241.4], [1.5394167E12, 4221.2], [1.53941688E12, 4149.433333333333], [1.53941706E12, 4288.966666666666], [1.53941676E12, 4270.4], [1.53941694E12, 4254.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.53941664E12, 0.016666666666666666], [1.53941712E12, 0.11666666666666667], [1.53941682E12, 0.4], [1.539417E12, 0.1], [1.5394167E12, 0.31666666666666665], [1.53941688E12, 0.21666666666666667], [1.53941706E12, 0.16666666666666666], [1.53941676E12, 0.35], [1.53941694E12, 0.2833333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941712E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53941664E12, "maxY": 4288.966666666666, "series": [{"data": [[1.53941664E12, 1104.4833333333333], [1.53941712E12, 2617.4], [1.53941682E12, 4183.133333333333], [1.539417E12, 4241.4], [1.5394167E12, 4221.2], [1.53941688E12, 4149.433333333333], [1.53941706E12, 4288.966666666666], [1.53941676E12, 4270.4], [1.53941694E12, 4254.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.53941664E12, 0.016666666666666666], [1.53941712E12, 0.11666666666666667], [1.53941682E12, 0.4], [1.539417E12, 0.1], [1.5394167E12, 0.31666666666666665], [1.53941688E12, 0.21666666666666667], [1.53941706E12, 0.16666666666666666], [1.53941676E12, 0.35], [1.53941694E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941712E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

