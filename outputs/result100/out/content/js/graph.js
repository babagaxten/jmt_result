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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 288.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 5.0], [1.0, 5.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 7.0], [1.5, 7.0], [1.6, 8.0], [1.7, 8.0], [1.8, 9.0], [1.9, 9.0], [2.0, 10.0], [2.1, 10.0], [2.2, 10.0], [2.3, 10.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 12.0], [3.0, 12.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 13.0], [3.6, 13.0], [3.7, 13.0], [3.8, 13.0], [3.9, 13.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 14.0], [4.5, 14.0], [4.6, 14.0], [4.7, 14.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 14.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 15.0], [6.2, 15.0], [6.3, 15.0], [6.4, 15.0], [6.5, 15.0], [6.6, 15.0], [6.7, 15.0], [6.8, 15.0], [6.9, 15.0], [7.0, 15.0], [7.1, 15.0], [7.2, 15.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 16.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 17.0], [10.0, 17.0], [10.1, 17.0], [10.2, 17.0], [10.3, 17.0], [10.4, 17.0], [10.5, 17.0], [10.6, 17.0], [10.7, 17.0], [10.8, 17.0], [10.9, 17.0], [11.0, 17.0], [11.1, 17.0], [11.2, 17.0], [11.3, 17.0], [11.4, 17.0], [11.5, 17.0], [11.6, 17.0], [11.7, 17.0], [11.8, 17.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 18.0], [13.9, 18.0], [14.0, 18.0], [14.1, 18.0], [14.2, 18.0], [14.3, 18.0], [14.4, 18.0], [14.5, 18.0], [14.6, 18.0], [14.7, 18.0], [14.8, 18.0], [14.9, 18.0], [15.0, 18.0], [15.1, 18.0], [15.2, 18.0], [15.3, 18.0], [15.4, 18.0], [15.5, 18.0], [15.6, 18.0], [15.7, 18.0], [15.8, 18.0], [15.9, 18.0], [16.0, 18.0], [16.1, 18.0], [16.2, 18.0], [16.3, 18.0], [16.4, 18.0], [16.5, 18.0], [16.6, 18.0], [16.7, 18.0], [16.8, 18.0], [16.9, 18.0], [17.0, 18.0], [17.1, 18.0], [17.2, 18.0], [17.3, 18.0], [17.4, 18.0], [17.5, 18.0], [17.6, 18.0], [17.7, 18.0], [17.8, 18.0], [17.9, 18.0], [18.0, 18.0], [18.1, 18.0], [18.2, 18.0], [18.3, 18.0], [18.4, 18.0], [18.5, 18.0], [18.6, 18.0], [18.7, 18.0], [18.8, 18.0], [18.9, 18.0], [19.0, 19.0], [19.1, 19.0], [19.2, 19.0], [19.3, 19.0], [19.4, 19.0], [19.5, 19.0], [19.6, 19.0], [19.7, 19.0], [19.8, 19.0], [19.9, 19.0], [20.0, 19.0], [20.1, 19.0], [20.2, 19.0], [20.3, 19.0], [20.4, 19.0], [20.5, 19.0], [20.6, 19.0], [20.7, 19.0], [20.8, 19.0], [20.9, 19.0], [21.0, 19.0], [21.1, 19.0], [21.2, 19.0], [21.3, 19.0], [21.4, 19.0], [21.5, 19.0], [21.6, 19.0], [21.7, 19.0], [21.8, 19.0], [21.9, 19.0], [22.0, 19.0], [22.1, 19.0], [22.2, 19.0], [22.3, 19.0], [22.4, 19.0], [22.5, 19.0], [22.6, 19.0], [22.7, 19.0], [22.8, 19.0], [22.9, 19.0], [23.0, 19.0], [23.1, 19.0], [23.2, 19.0], [23.3, 19.0], [23.4, 19.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 19.0], [23.9, 19.0], [24.0, 19.0], [24.1, 19.0], [24.2, 19.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 20.0], [27.5, 20.0], [27.6, 20.0], [27.7, 20.0], [27.8, 20.0], [27.9, 20.0], [28.0, 20.0], [28.1, 20.0], [28.2, 20.0], [28.3, 20.0], [28.4, 20.0], [28.5, 20.0], [28.6, 20.0], [28.7, 20.0], [28.8, 20.0], [28.9, 20.0], [29.0, 20.0], [29.1, 20.0], [29.2, 20.0], [29.3, 20.0], [29.4, 20.0], [29.5, 20.0], [29.6, 20.0], [29.7, 20.0], [29.8, 20.0], [29.9, 20.0], [30.0, 20.0], [30.1, 20.0], [30.2, 20.0], [30.3, 20.0], [30.4, 20.0], [30.5, 20.0], [30.6, 20.0], [30.7, 20.0], [30.8, 20.0], [30.9, 20.0], [31.0, 20.0], [31.1, 20.0], [31.2, 20.0], [31.3, 20.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 21.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 21.0], [34.1, 21.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 21.0], [34.8, 21.0], [34.9, 21.0], [35.0, 21.0], [35.1, 21.0], [35.2, 21.0], [35.3, 21.0], [35.4, 21.0], [35.5, 21.0], [35.6, 21.0], [35.7, 21.0], [35.8, 21.0], [35.9, 21.0], [36.0, 21.0], [36.1, 21.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 21.0], [36.7, 21.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 21.0], [37.3, 21.0], [37.4, 21.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 21.0], [37.9, 21.0], [38.0, 21.0], [38.1, 21.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 21.0], [39.1, 21.0], [39.2, 21.0], [39.3, 21.0], [39.4, 21.0], [39.5, 21.0], [39.6, 21.0], [39.7, 21.0], [39.8, 21.0], [39.9, 21.0], [40.0, 21.0], [40.1, 21.0], [40.2, 21.0], [40.3, 21.0], [40.4, 21.0], [40.5, 21.0], [40.6, 21.0], [40.7, 21.0], [40.8, 21.0], [40.9, 21.0], [41.0, 21.0], [41.1, 21.0], [41.2, 21.0], [41.3, 21.0], [41.4, 21.0], [41.5, 21.0], [41.6, 21.0], [41.7, 21.0], [41.8, 21.0], [41.9, 21.0], [42.0, 22.0], [42.1, 22.0], [42.2, 22.0], [42.3, 22.0], [42.4, 22.0], [42.5, 22.0], [42.6, 22.0], [42.7, 22.0], [42.8, 22.0], [42.9, 22.0], [43.0, 22.0], [43.1, 22.0], [43.2, 22.0], [43.3, 22.0], [43.4, 22.0], [43.5, 22.0], [43.6, 22.0], [43.7, 22.0], [43.8, 22.0], [43.9, 22.0], [44.0, 22.0], [44.1, 22.0], [44.2, 22.0], [44.3, 22.0], [44.4, 22.0], [44.5, 22.0], [44.6, 22.0], [44.7, 22.0], [44.8, 22.0], [44.9, 22.0], [45.0, 22.0], [45.1, 22.0], [45.2, 22.0], [45.3, 22.0], [45.4, 22.0], [45.5, 22.0], [45.6, 22.0], [45.7, 22.0], [45.8, 22.0], [45.9, 22.0], [46.0, 22.0], [46.1, 22.0], [46.2, 22.0], [46.3, 22.0], [46.4, 22.0], [46.5, 22.0], [46.6, 22.0], [46.7, 22.0], [46.8, 22.0], [46.9, 22.0], [47.0, 22.0], [47.1, 22.0], [47.2, 22.0], [47.3, 22.0], [47.4, 22.0], [47.5, 22.0], [47.6, 22.0], [47.7, 22.0], [47.8, 22.0], [47.9, 22.0], [48.0, 22.0], [48.1, 22.0], [48.2, 22.0], [48.3, 22.0], [48.4, 22.0], [48.5, 22.0], [48.6, 22.0], [48.7, 22.0], [48.8, 22.0], [48.9, 22.0], [49.0, 22.0], [49.1, 22.0], [49.2, 22.0], [49.3, 22.0], [49.4, 22.0], [49.5, 22.0], [49.6, 22.0], [49.7, 22.0], [49.8, 22.0], [49.9, 22.0], [50.0, 22.0], [50.1, 22.0], [50.2, 22.0], [50.3, 22.0], [50.4, 22.0], [50.5, 22.0], [50.6, 22.0], [50.7, 22.0], [50.8, 22.0], [50.9, 22.0], [51.0, 23.0], [51.1, 23.0], [51.2, 23.0], [51.3, 23.0], [51.4, 23.0], [51.5, 23.0], [51.6, 23.0], [51.7, 23.0], [51.8, 23.0], [51.9, 23.0], [52.0, 23.0], [52.1, 23.0], [52.2, 23.0], [52.3, 23.0], [52.4, 23.0], [52.5, 23.0], [52.6, 23.0], [52.7, 23.0], [52.8, 23.0], [52.9, 23.0], [53.0, 23.0], [53.1, 23.0], [53.2, 23.0], [53.3, 23.0], [53.4, 23.0], [53.5, 23.0], [53.6, 23.0], [53.7, 23.0], [53.8, 23.0], [53.9, 23.0], [54.0, 23.0], [54.1, 23.0], [54.2, 23.0], [54.3, 23.0], [54.4, 23.0], [54.5, 23.0], [54.6, 23.0], [54.7, 23.0], [54.8, 23.0], [54.9, 23.0], [55.0, 23.0], [55.1, 23.0], [55.2, 23.0], [55.3, 23.0], [55.4, 23.0], [55.5, 23.0], [55.6, 23.0], [55.7, 23.0], [55.8, 23.0], [55.9, 23.0], [56.0, 23.0], [56.1, 23.0], [56.2, 23.0], [56.3, 23.0], [56.4, 23.0], [56.5, 23.0], [56.6, 23.0], [56.7, 23.0], [56.8, 23.0], [56.9, 23.0], [57.0, 23.0], [57.1, 23.0], [57.2, 23.0], [57.3, 23.0], [57.4, 23.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 23.0], [58.5, 23.0], [58.6, 23.0], [58.7, 23.0], [58.8, 23.0], [58.9, 23.0], [59.0, 23.0], [59.1, 23.0], [59.2, 23.0], [59.3, 23.0], [59.4, 23.0], [59.5, 23.0], [59.6, 23.0], [59.7, 23.0], [59.8, 23.0], [59.9, 23.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 24.0], [61.0, 24.0], [61.1, 24.0], [61.2, 24.0], [61.3, 24.0], [61.4, 24.0], [61.5, 24.0], [61.6, 24.0], [61.7, 24.0], [61.8, 24.0], [61.9, 24.0], [62.0, 24.0], [62.1, 24.0], [62.2, 24.0], [62.3, 24.0], [62.4, 24.0], [62.5, 24.0], [62.6, 24.0], [62.7, 24.0], [62.8, 24.0], [62.9, 24.0], [63.0, 24.0], [63.1, 24.0], [63.2, 24.0], [63.3, 24.0], [63.4, 24.0], [63.5, 24.0], [63.6, 24.0], [63.7, 24.0], [63.8, 24.0], [63.9, 24.0], [64.0, 24.0], [64.1, 24.0], [64.2, 24.0], [64.3, 24.0], [64.4, 24.0], [64.5, 24.0], [64.6, 24.0], [64.7, 24.0], [64.8, 24.0], [64.9, 24.0], [65.0, 24.0], [65.1, 24.0], [65.2, 24.0], [65.3, 24.0], [65.4, 24.0], [65.5, 24.0], [65.6, 24.0], [65.7, 24.0], [65.8, 24.0], [65.9, 24.0], [66.0, 24.0], [66.1, 24.0], [66.2, 24.0], [66.3, 24.0], [66.4, 24.0], [66.5, 24.0], [66.6, 24.0], [66.7, 24.0], [66.8, 24.0], [66.9, 24.0], [67.0, 24.0], [67.1, 24.0], [67.2, 24.0], [67.3, 24.0], [67.4, 24.0], [67.5, 24.0], [67.6, 24.0], [67.7, 24.0], [67.8, 24.0], [67.9, 24.0], [68.0, 24.0], [68.1, 24.0], [68.2, 24.0], [68.3, 24.0], [68.4, 24.0], [68.5, 24.0], [68.6, 25.0], [68.7, 25.0], [68.8, 25.0], [68.9, 25.0], [69.0, 25.0], [69.1, 25.0], [69.2, 25.0], [69.3, 25.0], [69.4, 25.0], [69.5, 25.0], [69.6, 25.0], [69.7, 25.0], [69.8, 25.0], [69.9, 25.0], [70.0, 25.0], [70.1, 25.0], [70.2, 25.0], [70.3, 25.0], [70.4, 25.0], [70.5, 25.0], [70.6, 25.0], [70.7, 25.0], [70.8, 25.0], [70.9, 25.0], [71.0, 25.0], [71.1, 25.0], [71.2, 25.0], [71.3, 25.0], [71.4, 25.0], [71.5, 25.0], [71.6, 25.0], [71.7, 25.0], [71.8, 25.0], [71.9, 25.0], [72.0, 25.0], [72.1, 25.0], [72.2, 25.0], [72.3, 25.0], [72.4, 25.0], [72.5, 25.0], [72.6, 25.0], [72.7, 25.0], [72.8, 25.0], [72.9, 25.0], [73.0, 25.0], [73.1, 25.0], [73.2, 25.0], [73.3, 25.0], [73.4, 25.0], [73.5, 25.0], [73.6, 25.0], [73.7, 25.0], [73.8, 25.0], [73.9, 25.0], [74.0, 25.0], [74.1, 25.0], [74.2, 25.0], [74.3, 25.0], [74.4, 25.0], [74.5, 25.0], [74.6, 25.0], [74.7, 25.0], [74.8, 25.0], [74.9, 25.0], [75.0, 25.0], [75.1, 25.0], [75.2, 25.0], [75.3, 25.0], [75.4, 25.0], [75.5, 25.0], [75.6, 25.0], [75.7, 25.0], [75.8, 25.0], [75.9, 25.0], [76.0, 25.0], [76.1, 26.0], [76.2, 26.0], [76.3, 26.0], [76.4, 26.0], [76.5, 26.0], [76.6, 26.0], [76.7, 26.0], [76.8, 26.0], [76.9, 26.0], [77.0, 26.0], [77.1, 26.0], [77.2, 26.0], [77.3, 26.0], [77.4, 26.0], [77.5, 26.0], [77.6, 26.0], [77.7, 26.0], [77.8, 26.0], [77.9, 26.0], [78.0, 26.0], [78.1, 26.0], [78.2, 26.0], [78.3, 26.0], [78.4, 26.0], [78.5, 26.0], [78.6, 26.0], [78.7, 26.0], [78.8, 26.0], [78.9, 26.0], [79.0, 26.0], [79.1, 26.0], [79.2, 26.0], [79.3, 26.0], [79.4, 26.0], [79.5, 26.0], [79.6, 26.0], [79.7, 26.0], [79.8, 26.0], [79.9, 26.0], [80.0, 26.0], [80.1, 26.0], [80.2, 26.0], [80.3, 26.0], [80.4, 26.0], [80.5, 26.0], [80.6, 26.0], [80.7, 26.0], [80.8, 26.0], [80.9, 26.0], [81.0, 26.0], [81.1, 26.0], [81.2, 26.0], [81.3, 26.0], [81.4, 26.0], [81.5, 26.0], [81.6, 26.0], [81.7, 26.0], [81.8, 26.0], [81.9, 26.0], [82.0, 26.0], [82.1, 26.0], [82.2, 26.0], [82.3, 26.0], [82.4, 27.0], [82.5, 27.0], [82.6, 27.0], [82.7, 27.0], [82.8, 27.0], [82.9, 27.0], [83.0, 27.0], [83.1, 27.0], [83.2, 27.0], [83.3, 27.0], [83.4, 27.0], [83.5, 27.0], [83.6, 27.0], [83.7, 27.0], [83.8, 27.0], [83.9, 27.0], [84.0, 27.0], [84.1, 27.0], [84.2, 27.0], [84.3, 27.0], [84.4, 27.0], [84.5, 27.0], [84.6, 27.0], [84.7, 27.0], [84.8, 27.0], [84.9, 27.0], [85.0, 27.0], [85.1, 27.0], [85.2, 27.0], [85.3, 27.0], [85.4, 27.0], [85.5, 27.0], [85.6, 27.0], [85.7, 27.0], [85.8, 27.0], [85.9, 27.0], [86.0, 27.0], [86.1, 27.0], [86.2, 27.0], [86.3, 27.0], [86.4, 27.0], [86.5, 27.0], [86.6, 27.0], [86.7, 27.0], [86.8, 27.0], [86.9, 27.0], [87.0, 27.0], [87.1, 27.0], [87.2, 27.0], [87.3, 27.0], [87.4, 27.0], [87.5, 28.0], [87.6, 28.0], [87.7, 28.0], [87.8, 28.0], [87.9, 28.0], [88.0, 28.0], [88.1, 28.0], [88.2, 28.0], [88.3, 28.0], [88.4, 28.0], [88.5, 28.0], [88.6, 28.0], [88.7, 28.0], [88.8, 28.0], [88.9, 28.0], [89.0, 28.0], [89.1, 28.0], [89.2, 28.0], [89.3, 28.0], [89.4, 28.0], [89.5, 28.0], [89.6, 28.0], [89.7, 28.0], [89.8, 28.0], [89.9, 28.0], [90.0, 28.0], [90.1, 28.0], [90.2, 28.0], [90.3, 28.0], [90.4, 28.0], [90.5, 28.0], [90.6, 28.0], [90.7, 28.0], [90.8, 28.0], [90.9, 28.0], [91.0, 28.0], [91.1, 28.0], [91.2, 28.0], [91.3, 29.0], [91.4, 29.0], [91.5, 29.0], [91.6, 29.0], [91.7, 29.0], [91.8, 29.0], [91.9, 29.0], [92.0, 29.0], [92.1, 29.0], [92.2, 29.0], [92.3, 29.0], [92.4, 29.0], [92.5, 29.0], [92.6, 29.0], [92.7, 29.0], [92.8, 29.0], [92.9, 29.0], [93.0, 29.0], [93.1, 29.0], [93.2, 29.0], [93.3, 29.0], [93.4, 29.0], [93.5, 29.0], [93.6, 29.0], [93.7, 29.0], [93.8, 29.0], [93.9, 30.0], [94.0, 30.0], [94.1, 30.0], [94.2, 30.0], [94.3, 30.0], [94.4, 30.0], [94.5, 30.0], [94.6, 30.0], [94.7, 30.0], [94.8, 30.0], [94.9, 30.0], [95.0, 30.0], [95.1, 30.0], [95.2, 30.0], [95.3, 30.0], [95.4, 30.0], [95.5, 30.0], [95.6, 30.0], [95.7, 31.0], [95.8, 31.0], [95.9, 31.0], [96.0, 31.0], [96.1, 31.0], [96.2, 31.0], [96.3, 31.0], [96.4, 31.0], [96.5, 31.0], [96.6, 31.0], [96.7, 31.0], [96.8, 32.0], [96.9, 32.0], [97.0, 32.0], [97.1, 32.0], [97.2, 32.0], [97.3, 32.0], [97.4, 32.0], [97.5, 32.0], [97.6, 33.0], [97.7, 33.0], [97.8, 33.0], [97.9, 33.0], [98.0, 33.0], [98.1, 34.0], [98.2, 34.0], [98.3, 34.0], [98.4, 35.0], [98.5, 35.0], [98.6, 36.0], [98.7, 36.0], [98.8, 37.0], [98.9, 39.0], [99.0, 41.0], [99.1, 47.0], [99.2, 54.0], [99.3, 61.0], [99.4, 68.0], [99.5, 73.0], [99.6, 78.0], [99.7, 85.0], [99.8, 93.0], [99.9, 102.0], [100.0, 288.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 998768.0, "series": [{"data": [[0.0, 998768.0], [100.0, 1225.0], [200.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000000.0, "series": [{"data": [[0.0, 1000000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 61.2025651585572, "minX": 1.53941772E12, "maxY": 100.0, "series": [{"data": [[1.53941778E12, 100.0], [1.53941796E12, 61.2025651585572], [1.53941784E12, 100.0], [1.53941772E12, 96.46367656035072], [1.5394179E12, 99.70739008131937]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941796E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.6666666666666665, "minX": 1.0, "maxY": 28.646420824294996, "series": [{"data": [[2.0, 0.6666666666666665], [3.0, 0.7999999999999999], [4.0, 1.0000000000000002], [5.0, 4.9753086419753085], [6.0, 3.4918032786885247], [7.0, 3.7187499999999982], [8.0, 3.38709677419355], [9.0, 3.328467153284672], [10.0, 3.544715447154473], [11.0, 3.9675324675324672], [12.0, 3.8943661971830994], [13.0, 3.632286995515696], [14.0, 4.473684210526317], [15.0, 6.746666666666667], [16.0, 6.07643312101911], [17.0, 5.768786127167631], [18.0, 5.182692307692311], [19.0, 5.005076142131979], [20.0, 5.156950672645744], [21.0, 5.625000000000001], [22.0, 6.178861788617886], [23.0, 6.5530726256983245], [24.0, 6.545454545454543], [25.0, 6.309090909090909], [26.0, 5.986440677966101], [27.0, 7.68944099378882], [28.0, 8.342696629213485], [29.0, 8.118181818181819], [30.0, 7.484848484848483], [31.0, 5.8391959798994995], [32.0, 6.571428571428577], [33.0, 6.757085020242915], [34.0, 6.583038869257951], [35.0, 7.490963855421686], [36.0, 8.4], [37.0, 15.125000000000005], [38.0, 11.107692307692309], [39.0, 11.147540983606563], [40.0, 8.426640926640925], [41.0, 9.848802395209594], [42.0, 9.627118644067794], [43.0, 10.639593908629438], [44.0, 10.552419354838712], [45.0, 9.621495327102798], [46.0, 12.296296296296298], [47.0, 12.759656652360508], [48.0, 12.798099762470306], [49.0, 12.88405797101449], [50.0, 12.054563492063505], [51.0, 12.210526315789474], [52.0, 9.483870967741936], [53.0, 15.003616636528028], [54.0, 12.64528301886791], [55.0, 11.23333333333333], [56.0, 11.86879432624113], [57.0, 14.597633136094656], [58.0, 15.01246105919004], [59.0, 15.540178571428568], [60.0, 14.391089108910892], [61.0, 16.47191011235955], [62.0, 16.398406374501995], [63.0, 14.536585365853673], [64.0, 11.361216730038022], [65.0, 13.800000000000002], [66.0, 14.074468085106387], [67.0, 15.463917525773219], [68.0, 16.728464419475657], [69.0, 19.22347266881031], [70.0, 15.46802030456855], [71.0, 12.771513353115727], [72.0, 19.050691244239626], [73.0, 20.257142857142856], [74.0, 18.395631067961183], [75.0, 18.579591836734682], [76.0, 20.709401709401718], [77.0, 17.04513064133015], [78.0, 15.283289817232378], [79.0, 18.506079027355643], [80.0, 15.638016528925608], [81.0, 14.781938325991192], [82.0, 16.242346938775512], [83.0, 18.304399524375736], [85.0, 22.57573073516386], [84.0, 21.543165467625897], [86.0, 17.588235294117673], [87.0, 19.840848806366044], [88.0, 19.917480468750064], [89.0, 18.48538011695906], [90.0, 22.210950080515307], [91.0, 17.92270531400966], [92.0, 20.825811001410408], [93.0, 17.48358585858586], [94.0, 25.084375000000005], [95.0, 28.646420824294996], [96.0, 23.85615251299822], [97.0, 24.861157024793357], [98.0, 21.5287356321839], [99.0, 22.70191625266148], [100.0, 22.964140060561814], [1.0, 0.6666666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.55171099999849, 22.653235999999854]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 32294.3, "minX": 1.53941772E12, "maxY": 3695114.5833333335, "series": [{"data": [[1.53941778E12, 3641105.0], [1.53941796E12, 239374.41666666666], [1.53941784E12, 3695114.5833333335], [1.53941772E12, 2837918.4166666665], [1.5394179E12, 3669820.9166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53941778E12, 491226.0], [1.53941796E12, 32294.3], [1.53941784E12, 498512.5], [1.53941772E12, 382867.1], [1.5394179E12, 495100.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941796E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13.858622109784088, "minX": 1.53941772E12, "maxY": 23.03694205925586, "series": [{"data": [[1.53941778E12, 23.03694205925586], [1.53941796E12, 13.858622109784088], [1.53941784E12, 22.73212005717011], [1.53941772E12, 22.581681215230997], [1.5394179E12, 22.822092340518644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941796E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13.768076719421147, "minX": 1.53941772E12, "maxY": 22.96215672623215, "series": [{"data": [[1.53941778E12, 22.96215672623215], [1.53941796E12, 13.768076719421147], [1.53941784E12, 22.657627441638816], [1.53941772E12, 22.48842483462286], [1.5394179E12, 22.748820895007093]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941796E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4819958630588089, "minX": 1.53941772E12, "maxY": 0.8508453716707558, "series": [{"data": [[1.53941778E12, 0.500332637116112], [1.53941796E12, 0.6969465199741118], [1.53941784E12, 0.495538828013346], [1.53941772E12, 0.8508453716707558], [1.5394179E12, 0.4819958630588089]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941796E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.53941772E12, "maxY": 288.0, "series": [{"data": [[1.53941778E12, 126.0], [1.53941796E12, 94.0], [1.53941784E12, 161.0], [1.53941772E12, 288.0], [1.5394179E12, 139.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53941778E12, 0.0], [1.53941796E12, 0.0], [1.53941784E12, 0.0], [1.53941772E12, 0.0], [1.5394179E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53941778E12, 28.0], [1.53941796E12, 22.0], [1.53941784E12, 28.0], [1.53941772E12, 28.0], [1.5394179E12, 28.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53941778E12, 53.9900000000016], [1.53941796E12, 31.0], [1.53941784E12, 51.0], [1.53941772E12, 47.0], [1.5394179E12, 49.9700000000048]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53941778E12, 29.0], [1.53941796E12, 24.0], [1.53941784E12, 29.950000000000728], [1.53941772E12, 30.0], [1.5394179E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941796E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.5, "minX": 1000.0, "maxY": 68.0, "series": [{"data": [[9000.0, 18.0], [10000.0, 16.0], [11000.0, 18.0], [3000.0, 24.0], [12000.0, 17.0], [13000.0, 23.0], [14000.0, 15.0], [15000.0, 68.0], [1000.0, 25.0], [4000.0, 22.0], [16000.0, 60.5], [17000.0, 52.0], [18000.0, 9.5], [19000.0, 66.0], [5000.0, 21.0], [20000.0, 59.0], [6000.0, 20.0], [7000.0, 19.0], [2000.0, 25.0], [8000.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 20000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.5, "minX": 1000.0, "maxY": 68.0, "series": [{"data": [[9000.0, 18.0], [10000.0, 16.0], [11000.0, 18.0], [3000.0, 24.0], [12000.0, 17.0], [13000.0, 23.0], [14000.0, 15.0], [15000.0, 68.0], [1000.0, 25.0], [4000.0, 22.0], [16000.0, 59.5], [17000.0, 52.0], [18000.0, 9.5], [19000.0, 66.0], [5000.0, 21.0], [20000.0, 59.0], [6000.0, 20.0], [7000.0, 19.0], [2000.0, 25.0], [8000.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 20000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 281.8666666666667, "minX": 1.53941772E12, "maxY": 4372.933333333333, "series": [{"data": [[1.53941778E12, 4308.983333333334], [1.53941796E12, 281.8666666666667], [1.53941784E12, 4372.933333333333], [1.53941772E12, 3360.15], [1.5394179E12, 4342.733333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941796E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 283.28333333333336, "minX": 1.53941772E12, "maxY": 4372.916666666667, "series": [{"data": [[1.53941778E12, 4309.0], [1.53941796E12, 283.28333333333336], [1.53941784E12, 4372.916666666667], [1.53941772E12, 3358.483333333333], [1.5394179E12, 4342.983333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53941796E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 283.28333333333336, "minX": 1.53941772E12, "maxY": 4372.916666666667, "series": [{"data": [[1.53941778E12, 4309.0], [1.53941796E12, 283.28333333333336], [1.53941784E12, 4372.916666666667], [1.53941772E12, 3358.483333333333], [1.5394179E12, 4342.983333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941796E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 283.28333333333336, "minX": 1.53941772E12, "maxY": 4372.916666666667, "series": [{"data": [[1.53941778E12, 4309.0], [1.53941796E12, 283.28333333333336], [1.53941784E12, 4372.916666666667], [1.53941772E12, 3358.483333333333], [1.5394179E12, 4342.983333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53941796E12, "title": "Total Transactions Per Second"}},
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

