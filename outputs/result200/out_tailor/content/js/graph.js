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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7045.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 7.0], [7.4, 7.0], [7.5, 7.0], [7.6, 7.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 13.0], [30.9, 13.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 14.0], [35.4, 14.0], [35.5, 14.0], [35.6, 14.0], [35.7, 14.0], [35.8, 14.0], [35.9, 14.0], [36.0, 14.0], [36.1, 14.0], [36.2, 14.0], [36.3, 14.0], [36.4, 14.0], [36.5, 14.0], [36.6, 14.0], [36.7, 14.0], [36.8, 14.0], [36.9, 14.0], [37.0, 14.0], [37.1, 14.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 14.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 15.0], [40.0, 15.0], [40.1, 15.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 15.0], [41.1, 15.0], [41.2, 15.0], [41.3, 15.0], [41.4, 15.0], [41.5, 15.0], [41.6, 15.0], [41.7, 15.0], [41.8, 15.0], [41.9, 15.0], [42.0, 15.0], [42.1, 15.0], [42.2, 15.0], [42.3, 15.0], [42.4, 15.0], [42.5, 15.0], [42.6, 15.0], [42.7, 15.0], [42.8, 15.0], [42.9, 15.0], [43.0, 15.0], [43.1, 15.0], [43.2, 15.0], [43.3, 15.0], [43.4, 15.0], [43.5, 15.0], [43.6, 15.0], [43.7, 15.0], [43.8, 15.0], [43.9, 15.0], [44.0, 15.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 16.0], [44.5, 16.0], [44.6, 16.0], [44.7, 16.0], [44.8, 16.0], [44.9, 16.0], [45.0, 16.0], [45.1, 16.0], [45.2, 16.0], [45.3, 16.0], [45.4, 16.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 16.0], [46.5, 16.0], [46.6, 16.0], [46.7, 16.0], [46.8, 16.0], [46.9, 16.0], [47.0, 16.0], [47.1, 16.0], [47.2, 16.0], [47.3, 16.0], [47.4, 16.0], [47.5, 16.0], [47.6, 16.0], [47.7, 16.0], [47.8, 16.0], [47.9, 16.0], [48.0, 16.0], [48.1, 16.0], [48.2, 16.0], [48.3, 16.0], [48.4, 16.0], [48.5, 16.0], [48.6, 16.0], [48.7, 16.0], [48.8, 17.0], [48.9, 17.0], [49.0, 17.0], [49.1, 17.0], [49.2, 17.0], [49.3, 17.0], [49.4, 17.0], [49.5, 17.0], [49.6, 17.0], [49.7, 17.0], [49.8, 17.0], [49.9, 17.0], [50.0, 17.0], [50.1, 17.0], [50.2, 17.0], [50.3, 17.0], [50.4, 17.0], [50.5, 17.0], [50.6, 17.0], [50.7, 17.0], [50.8, 17.0], [50.9, 17.0], [51.0, 17.0], [51.1, 17.0], [51.2, 17.0], [51.3, 17.0], [51.4, 17.0], [51.5, 17.0], [51.6, 17.0], [51.7, 17.0], [51.8, 17.0], [51.9, 17.0], [52.0, 17.0], [52.1, 17.0], [52.2, 17.0], [52.3, 17.0], [52.4, 17.0], [52.5, 17.0], [52.6, 17.0], [52.7, 17.0], [52.8, 17.0], [52.9, 18.0], [53.0, 18.0], [53.1, 18.0], [53.2, 18.0], [53.3, 18.0], [53.4, 18.0], [53.5, 18.0], [53.6, 18.0], [53.7, 18.0], [53.8, 18.0], [53.9, 18.0], [54.0, 18.0], [54.1, 18.0], [54.2, 18.0], [54.3, 18.0], [54.4, 18.0], [54.5, 18.0], [54.6, 18.0], [54.7, 18.0], [54.8, 18.0], [54.9, 18.0], [55.0, 18.0], [55.1, 18.0], [55.2, 18.0], [55.3, 18.0], [55.4, 18.0], [55.5, 18.0], [55.6, 18.0], [55.7, 18.0], [55.8, 18.0], [55.9, 18.0], [56.0, 18.0], [56.1, 18.0], [56.2, 18.0], [56.3, 18.0], [56.4, 18.0], [56.5, 18.0], [56.6, 18.0], [56.7, 18.0], [56.8, 18.0], [56.9, 19.0], [57.0, 19.0], [57.1, 19.0], [57.2, 19.0], [57.3, 19.0], [57.4, 19.0], [57.5, 19.0], [57.6, 19.0], [57.7, 19.0], [57.8, 19.0], [57.9, 19.0], [58.0, 19.0], [58.1, 19.0], [58.2, 19.0], [58.3, 19.0], [58.4, 19.0], [58.5, 19.0], [58.6, 19.0], [58.7, 19.0], [58.8, 19.0], [58.9, 19.0], [59.0, 19.0], [59.1, 19.0], [59.2, 19.0], [59.3, 19.0], [59.4, 19.0], [59.5, 19.0], [59.6, 19.0], [59.7, 19.0], [59.8, 19.0], [59.9, 19.0], [60.0, 19.0], [60.1, 19.0], [60.2, 19.0], [60.3, 19.0], [60.4, 19.0], [60.5, 19.0], [60.6, 19.0], [60.7, 20.0], [60.8, 20.0], [60.9, 20.0], [61.0, 20.0], [61.1, 20.0], [61.2, 20.0], [61.3, 20.0], [61.4, 20.0], [61.5, 20.0], [61.6, 20.0], [61.7, 20.0], [61.8, 20.0], [61.9, 20.0], [62.0, 20.0], [62.1, 20.0], [62.2, 20.0], [62.3, 20.0], [62.4, 20.0], [62.5, 20.0], [62.6, 20.0], [62.7, 20.0], [62.8, 20.0], [62.9, 20.0], [63.0, 20.0], [63.1, 20.0], [63.2, 20.0], [63.3, 20.0], [63.4, 20.0], [63.5, 20.0], [63.6, 20.0], [63.7, 20.0], [63.8, 20.0], [63.9, 20.0], [64.0, 20.0], [64.1, 20.0], [64.2, 20.0], [64.3, 20.0], [64.4, 21.0], [64.5, 21.0], [64.6, 21.0], [64.7, 21.0], [64.8, 21.0], [64.9, 21.0], [65.0, 21.0], [65.1, 21.0], [65.2, 21.0], [65.3, 21.0], [65.4, 21.0], [65.5, 21.0], [65.6, 21.0], [65.7, 21.0], [65.8, 21.0], [65.9, 21.0], [66.0, 21.0], [66.1, 21.0], [66.2, 21.0], [66.3, 21.0], [66.4, 21.0], [66.5, 21.0], [66.6, 21.0], [66.7, 21.0], [66.8, 21.0], [66.9, 21.0], [67.0, 21.0], [67.1, 21.0], [67.2, 21.0], [67.3, 21.0], [67.4, 21.0], [67.5, 21.0], [67.6, 21.0], [67.7, 21.0], [67.8, 22.0], [67.9, 22.0], [68.0, 22.0], [68.1, 22.0], [68.2, 22.0], [68.3, 22.0], [68.4, 22.0], [68.5, 22.0], [68.6, 22.0], [68.7, 22.0], [68.8, 22.0], [68.9, 22.0], [69.0, 22.0], [69.1, 22.0], [69.2, 22.0], [69.3, 22.0], [69.4, 22.0], [69.5, 22.0], [69.6, 22.0], [69.7, 22.0], [69.8, 22.0], [69.9, 22.0], [70.0, 22.0], [70.1, 22.0], [70.2, 22.0], [70.3, 22.0], [70.4, 22.0], [70.5, 22.0], [70.6, 22.0], [70.7, 22.0], [70.8, 22.0], [70.9, 22.0], [71.0, 23.0], [71.1, 23.0], [71.2, 23.0], [71.3, 23.0], [71.4, 23.0], [71.5, 23.0], [71.6, 23.0], [71.7, 23.0], [71.8, 23.0], [71.9, 23.0], [72.0, 23.0], [72.1, 23.0], [72.2, 23.0], [72.3, 23.0], [72.4, 23.0], [72.5, 23.0], [72.6, 23.0], [72.7, 23.0], [72.8, 23.0], [72.9, 23.0], [73.0, 23.0], [73.1, 23.0], [73.2, 23.0], [73.3, 23.0], [73.4, 23.0], [73.5, 23.0], [73.6, 23.0], [73.7, 23.0], [73.8, 24.0], [73.9, 24.0], [74.0, 24.0], [74.1, 24.0], [74.2, 24.0], [74.3, 24.0], [74.4, 24.0], [74.5, 24.0], [74.6, 24.0], [74.7, 24.0], [74.8, 24.0], [74.9, 24.0], [75.0, 24.0], [75.1, 24.0], [75.2, 24.0], [75.3, 24.0], [75.4, 24.0], [75.5, 24.0], [75.6, 24.0], [75.7, 24.0], [75.8, 24.0], [75.9, 24.0], [76.0, 24.0], [76.1, 24.0], [76.2, 24.0], [76.3, 24.0], [76.4, 25.0], [76.5, 25.0], [76.6, 25.0], [76.7, 25.0], [76.8, 25.0], [76.9, 25.0], [77.0, 25.0], [77.1, 25.0], [77.2, 25.0], [77.3, 25.0], [77.4, 25.0], [77.5, 25.0], [77.6, 25.0], [77.7, 25.0], [77.8, 25.0], [77.9, 25.0], [78.0, 25.0], [78.1, 25.0], [78.2, 25.0], [78.3, 25.0], [78.4, 25.0], [78.5, 25.0], [78.6, 26.0], [78.7, 26.0], [78.8, 26.0], [78.9, 26.0], [79.0, 26.0], [79.1, 26.0], [79.2, 26.0], [79.3, 26.0], [79.4, 26.0], [79.5, 26.0], [79.6, 26.0], [79.7, 26.0], [79.8, 26.0], [79.9, 26.0], [80.0, 26.0], [80.1, 26.0], [80.2, 26.0], [80.3, 26.0], [80.4, 26.0], [80.5, 26.0], [80.6, 27.0], [80.7, 27.0], [80.8, 27.0], [80.9, 27.0], [81.0, 27.0], [81.1, 27.0], [81.2, 27.0], [81.3, 27.0], [81.4, 27.0], [81.5, 27.0], [81.6, 27.0], [81.7, 27.0], [81.8, 27.0], [81.9, 27.0], [82.0, 27.0], [82.1, 27.0], [82.2, 27.0], [82.3, 28.0], [82.4, 28.0], [82.5, 28.0], [82.6, 28.0], [82.7, 28.0], [82.8, 28.0], [82.9, 28.0], [83.0, 28.0], [83.1, 28.0], [83.2, 28.0], [83.3, 28.0], [83.4, 28.0], [83.5, 28.0], [83.6, 28.0], [83.7, 28.0], [83.8, 29.0], [83.9, 29.0], [84.0, 29.0], [84.1, 29.0], [84.2, 29.0], [84.3, 29.0], [84.4, 29.0], [84.5, 29.0], [84.6, 29.0], [84.7, 29.0], [84.8, 29.0], [84.9, 29.0], [85.0, 30.0], [85.1, 30.0], [85.2, 30.0], [85.3, 30.0], [85.4, 30.0], [85.5, 30.0], [85.6, 30.0], [85.7, 30.0], [85.8, 30.0], [85.9, 30.0], [86.0, 31.0], [86.1, 31.0], [86.2, 31.0], [86.3, 31.0], [86.4, 31.0], [86.5, 31.0], [86.6, 31.0], [86.7, 31.0], [86.8, 31.0], [86.9, 32.0], [87.0, 32.0], [87.1, 32.0], [87.2, 32.0], [87.3, 32.0], [87.4, 32.0], [87.5, 32.0], [87.6, 33.0], [87.7, 33.0], [87.8, 33.0], [87.9, 33.0], [88.0, 33.0], [88.1, 33.0], [88.2, 33.0], [88.3, 34.0], [88.4, 34.0], [88.5, 34.0], [88.6, 34.0], [88.7, 34.0], [88.8, 35.0], [88.9, 35.0], [89.0, 35.0], [89.1, 35.0], [89.2, 35.0], [89.3, 36.0], [89.4, 36.0], [89.5, 36.0], [89.6, 36.0], [89.7, 36.0], [89.8, 37.0], [89.9, 37.0], [90.0, 37.0], [90.1, 37.0], [90.2, 38.0], [90.3, 38.0], [90.4, 38.0], [90.5, 38.0], [90.6, 39.0], [90.7, 39.0], [90.8, 39.0], [90.9, 40.0], [91.0, 40.0], [91.1, 40.0], [91.2, 41.0], [91.3, 41.0], [91.4, 41.0], [91.5, 42.0], [91.6, 42.0], [91.7, 43.0], [91.8, 43.0], [91.9, 43.0], [92.0, 44.0], [92.1, 44.0], [92.2, 45.0], [92.3, 45.0], [92.4, 46.0], [92.5, 47.0], [92.6, 47.0], [92.7, 48.0], [92.8, 48.0], [92.9, 49.0], [93.0, 50.0], [93.1, 50.0], [93.2, 51.0], [93.3, 52.0], [93.4, 52.0], [93.5, 53.0], [93.6, 54.0], [93.7, 55.0], [93.8, 55.0], [93.9, 56.0], [94.0, 57.0], [94.1, 58.0], [94.2, 59.0], [94.3, 60.0], [94.4, 61.0], [94.5, 61.0], [94.6, 62.0], [94.7, 63.0], [94.8, 64.0], [94.9, 65.0], [95.0, 67.0], [95.1, 68.0], [95.2, 69.0], [95.3, 70.0], [95.4, 71.0], [95.5, 72.0], [95.6, 74.0], [95.7, 75.0], [95.8, 77.0], [95.9, 78.0], [96.0, 80.0], [96.1, 81.0], [96.2, 83.0], [96.3, 85.0], [96.4, 87.0], [96.5, 89.0], [96.6, 91.0], [96.7, 93.0], [96.8, 95.0], [96.9, 98.0], [97.0, 100.0], [97.1, 103.0], [97.2, 106.0], [97.3, 109.0], [97.4, 113.0], [97.5, 117.0], [97.6, 121.0], [97.7, 126.0], [97.8, 131.0], [97.9, 137.0], [98.0, 144.0], [98.1, 151.0], [98.2, 160.0], [98.3, 170.0], [98.4, 181.0], [98.5, 193.0], [98.6, 207.0], [98.7, 214.0], [98.8, 219.0], [98.9, 224.0], [99.0, 229.0], [99.1, 236.0], [99.2, 250.0], [99.3, 285.0], [99.4, 350.0], [99.5, 1007.0], [99.6, 1013.0], [99.7, 1017.0], [99.8, 1021.0], [99.9, 1027.0], [100.0, 7045.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1939437.0, "series": [{"data": [[0.0, 1939437.0], [600.0, 77.0], [700.0, 24.0], [3000.0, 103.0], [200.0, 15894.0], [800.0, 22.0], [3200.0, 1.0], [900.0, 8.0], [1000.0, 9863.0], [1100.0, 52.0], [300.0, 2036.0], [1200.0, 263.0], [1400.0, 10.0], [100.0, 31302.0], [400.0, 704.0], [7000.0, 36.0], [500.0, 168.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1989375.0, "series": [{"data": [[0.0, 1989375.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10485.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 36.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 168.4332971145748, "minX": 1.53965742E12, "maxY": 200.0, "series": [{"data": [[1.53965742E12, 189.82208753306386], [1.53965772E12, 168.4332971145748], [1.53965754E12, 200.0], [1.53965748E12, 200.0], [1.53965766E12, 200.0], [1.5396576E12, 200.0]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965772E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.6949152542372882, "minX": 1.0, "maxY": 70.96629213483142, "series": [{"data": [[2.0, 13.541133455210256], [3.0, 0.6949152542372882], [4.0, 0.8105726872246695], [5.0, 1.0351239669421486], [6.0, 1.101694915254237], [7.0, 1.38], [8.0, 1.6307692307692307], [9.0, 1.75], [10.0, 6.388349514563107], [11.0, 3.1529581529581527], [12.0, 5.441176470588236], [13.0, 4.315436241610739], [14.0, 3.698979591836735], [15.0, 5.120141342756181], [16.0, 9.375000000000004], [17.0, 5.000000000000001], [18.0, 5.310850439882695], [19.0, 4.7715877437325895], [20.0, 5.416091954022988], [21.0, 5.813397129186603], [22.0, 6.4769230769230735], [23.0, 5.927777777777776], [24.0, 5.484265734265738], [25.0, 4.279635258358664], [26.0, 5.071969696969701], [27.0, 4.72340425531915], [28.0, 7.883495145631065], [29.0, 7.339080459770118], [30.0, 9.243697478991594], [31.0, 5.1635610766045525], [32.0, 7.999999999999999], [33.0, 6.868312757201647], [34.0, 15.411034482758621], [35.0, 5.400793650793653], [36.0, 5.960893854748601], [37.0, 6.8249999999999975], [38.0, 9.891891891891895], [39.0, 6.742378048780487], [40.0, 6.62857142857143], [41.0, 10.075819672131152], [42.0, 10.682926829268292], [43.0, 7.6302521008403374], [44.0, 10.000000000000005], [45.0, 10.367088607594933], [46.0, 8.849019607843147], [47.0, 10.012605042016807], [48.0, 10.85036496350364], [49.0, 13.648967551622402], [50.0, 17.722891566265055], [51.0, 7.801687763713074], [52.0, 6.901785714285716], [53.0, 8.012539184952958], [54.0, 12.93388429752066], [55.0, 14.657342657342655], [56.0, 19.3448275862069], [57.0, 11.38736842105264], [58.0, 12.789719626168225], [59.0, 12.183486238532108], [60.0, 11.501901140684415], [61.0, 22.360360360360364], [62.0, 11.396713615023474], [63.0, 11.07831325301205], [64.0, 11.215686274509803], [65.0, 9.721649484536082], [66.0, 10.334862385321111], [67.0, 12.059633027522937], [68.0, 13.315985130111525], [69.0, 13.868656716417899], [70.0, 13.475840336134455], [71.0, 15.51674641148325], [72.0, 15.14646464646464], [73.0, 11.510948905109498], [74.0, 19.012658227848103], [75.0, 12.068111455108353], [76.0, 18.019108280254777], [77.0, 13.339092872570193], [78.0, 11.769565217391303], [79.0, 11.590618336886987], [80.0, 10.465986394557824], [81.0, 25.816091954023005], [82.0, 17.286343612334797], [83.0, 14.936170212765955], [84.0, 10.672354948805474], [85.0, 18.94285714285715], [86.0, 14.880239520958092], [87.0, 13.188585607940462], [88.0, 36.39593908629441], [89.0, 14.638138138138139], [90.0, 12.19178082191781], [91.0, 11.268096514745313], [92.0, 11.877483443708618], [93.0, 11.710769230769227], [94.0, 14.409594095940957], [95.0, 20.34631147540986], [96.0, 12.920529801324502], [97.0, 17.85210084033615], [98.0, 14.14747474747473], [99.0, 13.65402843601896], [100.0, 14.67660550458716], [101.0, 16.03284671532848], [102.0, 23.661087866108765], [103.0, 13.979274611398958], [104.0, 12.283095723014252], [105.0, 12.798484848484843], [106.0, 13.37251356238698], [107.0, 11.748971193415636], [108.0, 14.712820512820523], [109.0, 14.413865546218474], [110.0, 13.277173913043482], [111.0, 17.07369758576877], [112.0, 22.57816711590294], [113.0, 17.212500000000006], [114.0, 16.227477477477514], [115.0, 20.657276995305175], [116.0, 16.406896551724145], [117.0, 11.225225225225225], [118.0, 18.376824034334764], [119.0, 15.654731457800512], [120.0, 19.07053941908714], [121.0, 15.035897435897406], [122.0, 20.677310924369767], [123.0, 23.83881578947369], [124.0, 24.320634920634905], [125.0, 15.27611940298508], [126.0, 20.23750000000001], [127.0, 11.871428571428574], [128.0, 16.064748201438853], [129.0, 21.981744421906708], [130.0, 19.486033519553082], [131.0, 22.158430973000492], [132.0, 17.005339435545395], [133.0, 16.591603053435115], [134.0, 14.198863636363642], [135.0, 18.506458557588797], [136.0, 15.791139240506327], [137.0, 17.68421052631579], [138.0, 32.57228315054832], [139.0, 22.03617571059432], [140.0, 17.20872274143302], [141.0, 17.929411764705886], [142.0, 17.064285714285713], [143.0, 70.96629213483142], [144.0, 26.71428571428572], [145.0, 26.369999999999976], [146.0, 18.35657051282052], [147.0, 24.12627986348123], [148.0, 32.51807228915663], [149.0, 20.699699699699693], [150.0, 25.403470715835148], [151.0, 25.55753968253968], [152.0, 20.470494417862806], [153.0, 25.122093023255815], [154.0, 21.010683760683733], [155.0, 32.506573859242096], [156.0, 17.264492753623188], [157.0, 19.701000370507575], [158.0, 23.072210065645525], [159.0, 24.849223946784893], [160.0, 20.995404411764707], [161.0, 24.98985343855692], [162.0, 30.79661016949152], [163.0, 19.083175803402646], [164.0, 18.604255319148944], [165.0, 41.81696428571427], [166.0, 60.98529411764703], [167.0, 20.15070093457946], [168.0, 22.950191570881223], [169.0, 16.324840764331228], [170.0, 17.698750918442308], [171.0, 37.804374240583215], [172.0, 33.8627450980392], [173.0, 29.871999999999986], [174.0, 35.14919468776479], [175.0, 24.044660194174746], [176.0, 27.796186719263638], [177.0, 14.636363636363633], [178.0, 29.82919563058591], [179.0, 26.276321634828957], [180.0, 21.2429274292743], [181.0, 23.57255616272009], [182.0, 14.601769911504427], [183.0, 31.609681372549048], [184.0, 19.950124688279328], [185.0, 33.007348029392126], [186.0, 17.329308452250274], [187.0, 31.977085053674585], [188.0, 22.944244604316538], [189.0, 28.490003772161458], [190.0, 25.583142639206702], [191.0, 33.47359526827208], [192.0, 30.420780254777075], [193.0, 18.45986779981114], [194.0, 46.0785340314136], [195.0, 31.173108035232783], [196.0, 22.807246998284672], [197.0, 27.617551682205136], [198.0, 31.471918307804444], [199.0, 31.83221072889106], [200.0, 29.46657186854906], [1.0, 32.871559633027516]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[195.4276330000043, 28.899309499999006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 340438.2, "minX": 1.53965742E12, "maxY": 5609732.65, "series": [{"data": [[1.53965742E12, 2523423.5], [1.53965772E12, 3266535.7], [1.53965754E12, 5564575.933333334], [1.53965748E12, 5602012.0], [1.53965766E12, 5609732.65], [1.5396576E12, 5601477.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53965742E12, 340438.2], [1.53965772E12, 440638.5], [1.53965754E12, 750652.0], [1.53965748E12, 755774.4], [1.53965766E12, 756768.1], [1.5396576E12, 755660.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965772E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 25.364740173504572, "minX": 1.53965742E12, "maxY": 29.65541190406256, "series": [{"data": [[1.53965742E12, 28.39432854479889], [1.53965772E12, 25.364740173504572], [1.53965754E12, 29.65541190406256], [1.53965748E12, 29.559412835364608], [1.53965766E12, 29.359473973593765], [1.5396576E12, 29.31578762103229]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965772E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25.012348872907022, "minX": 1.53965742E12, "maxY": 29.481690700293306, "series": [{"data": [[1.53965742E12, 28.272684146491358], [1.53965772E12, 25.012348872907022], [1.53965754E12, 29.36667409109751], [1.53965748E12, 29.481690700293306], [1.53965766E12, 29.13852129136546], [1.5396576E12, 29.10988300902891]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965772E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 11.328215277418359, "minX": 1.53965742E12, "maxY": 13.823046042374354, "series": [{"data": [[1.53965742E12, 12.910725647121836], [1.53965772E12, 11.328215277418359], [1.53965754E12, 13.488911443410885], [1.53965748E12, 13.662418044326229], [1.53965766E12, 13.823046042374354], [1.5396576E12, 13.491098075796447]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965772E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.53965742E12, "maxY": 3214.0, "series": [{"data": [[1.53965742E12, 3016.0], [1.53965772E12, 3023.0], [1.53965754E12, 3030.0], [1.53965748E12, 3036.0], [1.53965766E12, 3032.0], [1.5396576E12, 3214.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53965742E12, 0.0], [1.53965772E12, 0.0], [1.53965754E12, 0.0], [1.53965748E12, 0.0], [1.53965766E12, 0.0], [1.5396576E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53965742E12, 41.0], [1.53965772E12, 13.0], [1.53965754E12, 42.0], [1.53965748E12, 33.0], [1.53965766E12, 40.0], [1.5396576E12, 42.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53965742E12, 254.0], [1.53965772E12, 32.0], [1.53965754E12, 233.0], [1.53965748E12, 240.0], [1.53965766E12, 216.9900000000016], [1.5396576E12, 268.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53965742E12, 75.0], [1.53965772E12, 17.0], [1.53965754E12, 68.0], [1.53965748E12, 60.0], [1.53965766E12, 64.0], [1.5396576E12, 74.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965772E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1000.0, "maxY": 7024.0, "series": [{"data": [[9000.0, 14.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 14.0], [13000.0, 15.0], [14000.0, 17.0], [15000.0, 18.0], [1000.0, 28.0], [16000.0, 18.0], [17000.0, 17.0], [18000.0, 16.0], [19000.0, 16.0], [20000.0, 18.0], [21000.0, 19.0], [22000.0, 17.0], [23000.0, 17.0], [24000.0, 18.0], [25000.0, 18.0], [26000.0, 25.0], [27000.0, 19.0], [28000.0, 20.0], [29000.0, 22.0], [2000.0, 26.0], [3000.0, 22.0], [4000.0, 19.0], [5000.0, 19.0], [6000.0, 17.0], [7000.0, 15.0], [8000.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 7014.0], [5000.0, 7013.0], [10000.0, 7010.0], [11000.0, 7019.0], [6000.0, 7012.5], [12000.0, 7024.0], [3000.0, 7017.0], [7000.0, 7014.0], [8000.0, 7017.0], [2000.0, 7014.0], [4000.0, 7016.0], [1000.0, 7016.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 28.0, "series": [{"data": [[9000.0, 14.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 14.0], [13000.0, 15.0], [14000.0, 16.5], [15000.0, 18.0], [1000.0, 28.0], [16000.0, 18.0], [17000.0, 17.0], [18000.0, 16.0], [19000.0, 16.0], [20000.0, 18.0], [21000.0, 19.0], [22000.0, 17.0], [23000.0, 17.0], [24000.0, 18.0], [25000.0, 18.0], [26000.0, 25.0], [27000.0, 19.0], [28000.0, 20.0], [29000.0, 22.0], [2000.0, 26.0], [3000.0, 22.0], [4000.0, 19.0], [5000.0, 19.0], [6000.0, 17.0], [7000.0, 15.0], [8000.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 0.0], [5000.0, 0.0], [10000.0, 0.0], [11000.0, 0.0], [6000.0, 0.0], [12000.0, 0.0], [3000.0, 0.0], [7000.0, 0.0], [8000.0, 0.0], [2000.0, 0.0], [4000.0, 0.0], [1000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2989.6, "minX": 1.53965742E12, "maxY": 6638.433333333333, "series": [{"data": [[1.53965742E12, 2989.6], [1.53965772E12, 3862.1], [1.53965754E12, 6584.883333333333], [1.53965748E12, 6629.6], [1.53965766E12, 6638.433333333333], [1.5396576E12, 6628.716666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965772E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.53965742E12, "maxY": 6638.316666666667, "series": [{"data": [[1.53965742E12, 2986.3], [1.53965772E12, 3865.25], [1.53965754E12, 6584.666666666667], [1.53965748E12, 6629.6], [1.53965766E12, 6638.316666666667], [1.5396576E12, 6628.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.53965772E12, 0.15], [1.53965754E12, 0.2], [1.53965766E12, 0.13333333333333333], [1.5396576E12, 0.11666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965772E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.53965742E12, "maxY": 6638.316666666667, "series": [{"data": [[1.53965742E12, 2986.3], [1.53965772E12, 3865.25], [1.53965754E12, 6584.666666666667], [1.53965748E12, 6629.6], [1.53965766E12, 6638.316666666667], [1.5396576E12, 6628.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.53965772E12, 0.15], [1.53965754E12, 0.2], [1.53965766E12, 0.13333333333333333], [1.5396576E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965772E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.53965742E12, "maxY": 6638.316666666667, "series": [{"data": [[1.53965742E12, 2986.3], [1.53965772E12, 3865.25], [1.53965754E12, 6584.666666666667], [1.53965748E12, 6629.6], [1.53965766E12, 6638.316666666667], [1.5396576E12, 6628.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.53965772E12, 0.15], [1.53965754E12, 0.2], [1.53965766E12, 0.13333333333333333], [1.5396576E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965772E12, "title": "Total Transactions Per Second"}},
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

