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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7050.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 11.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 12.0], [23.7, 12.0], [23.8, 12.0], [23.9, 12.0], [24.0, 12.0], [24.1, 12.0], [24.2, 12.0], [24.3, 12.0], [24.4, 12.0], [24.5, 12.0], [24.6, 12.0], [24.7, 12.0], [24.8, 12.0], [24.9, 12.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 13.0], [29.3, 13.0], [29.4, 13.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 13.0], [30.9, 13.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 14.0], [35.0, 14.0], [35.1, 14.0], [35.2, 14.0], [35.3, 14.0], [35.4, 14.0], [35.5, 14.0], [35.6, 14.0], [35.7, 14.0], [35.8, 14.0], [35.9, 14.0], [36.0, 14.0], [36.1, 14.0], [36.2, 14.0], [36.3, 14.0], [36.4, 14.0], [36.5, 14.0], [36.6, 14.0], [36.7, 14.0], [36.8, 14.0], [36.9, 14.0], [37.0, 14.0], [37.1, 14.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 14.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 14.0], [40.0, 14.0], [40.1, 14.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 15.0], [41.1, 15.0], [41.2, 15.0], [41.3, 15.0], [41.4, 15.0], [41.5, 15.0], [41.6, 15.0], [41.7, 15.0], [41.8, 15.0], [41.9, 15.0], [42.0, 15.0], [42.1, 15.0], [42.2, 15.0], [42.3, 15.0], [42.4, 15.0], [42.5, 15.0], [42.6, 15.0], [42.7, 15.0], [42.8, 15.0], [42.9, 15.0], [43.0, 15.0], [43.1, 15.0], [43.2, 15.0], [43.3, 15.0], [43.4, 15.0], [43.5, 15.0], [43.6, 15.0], [43.7, 15.0], [43.8, 15.0], [43.9, 15.0], [44.0, 15.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 16.0], [45.3, 16.0], [45.4, 16.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 16.0], [46.5, 16.0], [46.6, 16.0], [46.7, 16.0], [46.8, 16.0], [46.9, 16.0], [47.0, 16.0], [47.1, 16.0], [47.2, 16.0], [47.3, 16.0], [47.4, 16.0], [47.5, 16.0], [47.6, 16.0], [47.7, 16.0], [47.8, 16.0], [47.9, 16.0], [48.0, 16.0], [48.1, 16.0], [48.2, 16.0], [48.3, 16.0], [48.4, 16.0], [48.5, 16.0], [48.6, 16.0], [48.7, 16.0], [48.8, 16.0], [48.9, 16.0], [49.0, 16.0], [49.1, 16.0], [49.2, 16.0], [49.3, 16.0], [49.4, 16.0], [49.5, 16.0], [49.6, 16.0], [49.7, 16.0], [49.8, 16.0], [49.9, 17.0], [50.0, 17.0], [50.1, 17.0], [50.2, 17.0], [50.3, 17.0], [50.4, 17.0], [50.5, 17.0], [50.6, 17.0], [50.7, 17.0], [50.8, 17.0], [50.9, 17.0], [51.0, 17.0], [51.1, 17.0], [51.2, 17.0], [51.3, 17.0], [51.4, 17.0], [51.5, 17.0], [51.6, 17.0], [51.7, 17.0], [51.8, 17.0], [51.9, 17.0], [52.0, 17.0], [52.1, 17.0], [52.2, 17.0], [52.3, 17.0], [52.4, 17.0], [52.5, 17.0], [52.6, 17.0], [52.7, 17.0], [52.8, 17.0], [52.9, 17.0], [53.0, 17.0], [53.1, 17.0], [53.2, 17.0], [53.3, 17.0], [53.4, 17.0], [53.5, 17.0], [53.6, 17.0], [53.7, 17.0], [53.8, 17.0], [53.9, 17.0], [54.0, 17.0], [54.1, 17.0], [54.2, 17.0], [54.3, 18.0], [54.4, 18.0], [54.5, 18.0], [54.6, 18.0], [54.7, 18.0], [54.8, 18.0], [54.9, 18.0], [55.0, 18.0], [55.1, 18.0], [55.2, 18.0], [55.3, 18.0], [55.4, 18.0], [55.5, 18.0], [55.6, 18.0], [55.7, 18.0], [55.8, 18.0], [55.9, 18.0], [56.0, 18.0], [56.1, 18.0], [56.2, 18.0], [56.3, 18.0], [56.4, 18.0], [56.5, 18.0], [56.6, 18.0], [56.7, 18.0], [56.8, 18.0], [56.9, 18.0], [57.0, 18.0], [57.1, 18.0], [57.2, 18.0], [57.3, 18.0], [57.4, 18.0], [57.5, 18.0], [57.6, 18.0], [57.7, 18.0], [57.8, 18.0], [57.9, 18.0], [58.0, 18.0], [58.1, 18.0], [58.2, 18.0], [58.3, 18.0], [58.4, 18.0], [58.5, 19.0], [58.6, 19.0], [58.7, 19.0], [58.8, 19.0], [58.9, 19.0], [59.0, 19.0], [59.1, 19.0], [59.2, 19.0], [59.3, 19.0], [59.4, 19.0], [59.5, 19.0], [59.6, 19.0], [59.7, 19.0], [59.8, 19.0], [59.9, 19.0], [60.0, 19.0], [60.1, 19.0], [60.2, 19.0], [60.3, 19.0], [60.4, 19.0], [60.5, 19.0], [60.6, 19.0], [60.7, 19.0], [60.8, 19.0], [60.9, 19.0], [61.0, 19.0], [61.1, 19.0], [61.2, 19.0], [61.3, 19.0], [61.4, 19.0], [61.5, 19.0], [61.6, 19.0], [61.7, 19.0], [61.8, 19.0], [61.9, 19.0], [62.0, 19.0], [62.1, 19.0], [62.2, 19.0], [62.3, 19.0], [62.4, 19.0], [62.5, 20.0], [62.6, 20.0], [62.7, 20.0], [62.8, 20.0], [62.9, 20.0], [63.0, 20.0], [63.1, 20.0], [63.2, 20.0], [63.3, 20.0], [63.4, 20.0], [63.5, 20.0], [63.6, 20.0], [63.7, 20.0], [63.8, 20.0], [63.9, 20.0], [64.0, 20.0], [64.1, 20.0], [64.2, 20.0], [64.3, 20.0], [64.4, 20.0], [64.5, 20.0], [64.6, 20.0], [64.7, 20.0], [64.8, 20.0], [64.9, 20.0], [65.0, 20.0], [65.1, 20.0], [65.2, 20.0], [65.3, 20.0], [65.4, 20.0], [65.5, 20.0], [65.6, 20.0], [65.7, 20.0], [65.8, 20.0], [65.9, 20.0], [66.0, 20.0], [66.1, 20.0], [66.2, 21.0], [66.3, 21.0], [66.4, 21.0], [66.5, 21.0], [66.6, 21.0], [66.7, 21.0], [66.8, 21.0], [66.9, 21.0], [67.0, 21.0], [67.1, 21.0], [67.2, 21.0], [67.3, 21.0], [67.4, 21.0], [67.5, 21.0], [67.6, 21.0], [67.7, 21.0], [67.8, 21.0], [67.9, 21.0], [68.0, 21.0], [68.1, 21.0], [68.2, 21.0], [68.3, 21.0], [68.4, 21.0], [68.5, 21.0], [68.6, 21.0], [68.7, 21.0], [68.8, 21.0], [68.9, 21.0], [69.0, 21.0], [69.1, 21.0], [69.2, 21.0], [69.3, 21.0], [69.4, 21.0], [69.5, 22.0], [69.6, 22.0], [69.7, 22.0], [69.8, 22.0], [69.9, 22.0], [70.0, 22.0], [70.1, 22.0], [70.2, 22.0], [70.3, 22.0], [70.4, 22.0], [70.5, 22.0], [70.6, 22.0], [70.7, 22.0], [70.8, 22.0], [70.9, 22.0], [71.0, 22.0], [71.1, 22.0], [71.2, 22.0], [71.3, 22.0], [71.4, 22.0], [71.5, 22.0], [71.6, 22.0], [71.7, 22.0], [71.8, 22.0], [71.9, 22.0], [72.0, 22.0], [72.1, 22.0], [72.2, 22.0], [72.3, 22.0], [72.4, 22.0], [72.5, 23.0], [72.6, 23.0], [72.7, 23.0], [72.8, 23.0], [72.9, 23.0], [73.0, 23.0], [73.1, 23.0], [73.2, 23.0], [73.3, 23.0], [73.4, 23.0], [73.5, 23.0], [73.6, 23.0], [73.7, 23.0], [73.8, 23.0], [73.9, 23.0], [74.0, 23.0], [74.1, 23.0], [74.2, 23.0], [74.3, 23.0], [74.4, 23.0], [74.5, 23.0], [74.6, 23.0], [74.7, 23.0], [74.8, 23.0], [74.9, 23.0], [75.0, 23.0], [75.1, 23.0], [75.2, 23.0], [75.3, 24.0], [75.4, 24.0], [75.5, 24.0], [75.6, 24.0], [75.7, 24.0], [75.8, 24.0], [75.9, 24.0], [76.0, 24.0], [76.1, 24.0], [76.2, 24.0], [76.3, 24.0], [76.4, 24.0], [76.5, 24.0], [76.6, 24.0], [76.7, 24.0], [76.8, 24.0], [76.9, 24.0], [77.0, 24.0], [77.1, 24.0], [77.2, 24.0], [77.3, 24.0], [77.4, 24.0], [77.5, 24.0], [77.6, 24.0], [77.7, 25.0], [77.8, 25.0], [77.9, 25.0], [78.0, 25.0], [78.1, 25.0], [78.2, 25.0], [78.3, 25.0], [78.4, 25.0], [78.5, 25.0], [78.6, 25.0], [78.7, 25.0], [78.8, 25.0], [78.9, 25.0], [79.0, 25.0], [79.1, 25.0], [79.2, 25.0], [79.3, 25.0], [79.4, 25.0], [79.5, 25.0], [79.6, 25.0], [79.7, 26.0], [79.8, 26.0], [79.9, 26.0], [80.0, 26.0], [80.1, 26.0], [80.2, 26.0], [80.3, 26.0], [80.4, 26.0], [80.5, 26.0], [80.6, 26.0], [80.7, 26.0], [80.8, 26.0], [80.9, 26.0], [81.0, 26.0], [81.1, 26.0], [81.2, 26.0], [81.3, 26.0], [81.4, 27.0], [81.5, 27.0], [81.6, 27.0], [81.7, 27.0], [81.8, 27.0], [81.9, 27.0], [82.0, 27.0], [82.1, 27.0], [82.2, 27.0], [82.3, 27.0], [82.4, 27.0], [82.5, 27.0], [82.6, 27.0], [82.7, 27.0], [82.8, 27.0], [82.9, 28.0], [83.0, 28.0], [83.1, 28.0], [83.2, 28.0], [83.3, 28.0], [83.4, 28.0], [83.5, 28.0], [83.6, 28.0], [83.7, 28.0], [83.8, 28.0], [83.9, 28.0], [84.0, 28.0], [84.1, 28.0], [84.2, 29.0], [84.3, 29.0], [84.4, 29.0], [84.5, 29.0], [84.6, 29.0], [84.7, 29.0], [84.8, 29.0], [84.9, 29.0], [85.0, 29.0], [85.1, 29.0], [85.2, 29.0], [85.3, 30.0], [85.4, 30.0], [85.5, 30.0], [85.6, 30.0], [85.7, 30.0], [85.8, 30.0], [85.9, 30.0], [86.0, 30.0], [86.1, 30.0], [86.2, 31.0], [86.3, 31.0], [86.4, 31.0], [86.5, 31.0], [86.6, 31.0], [86.7, 31.0], [86.8, 31.0], [86.9, 31.0], [87.0, 32.0], [87.1, 32.0], [87.2, 32.0], [87.3, 32.0], [87.4, 32.0], [87.5, 32.0], [87.6, 33.0], [87.7, 33.0], [87.8, 33.0], [87.9, 33.0], [88.0, 33.0], [88.1, 33.0], [88.2, 34.0], [88.3, 34.0], [88.4, 34.0], [88.5, 34.0], [88.6, 34.0], [88.7, 35.0], [88.8, 35.0], [88.9, 35.0], [89.0, 35.0], [89.1, 36.0], [89.2, 36.0], [89.3, 36.0], [89.4, 36.0], [89.5, 36.0], [89.6, 37.0], [89.7, 37.0], [89.8, 37.0], [89.9, 37.0], [90.0, 38.0], [90.1, 38.0], [90.2, 38.0], [90.3, 38.0], [90.4, 39.0], [90.5, 39.0], [90.6, 39.0], [90.7, 40.0], [90.8, 40.0], [90.9, 40.0], [91.0, 41.0], [91.1, 41.0], [91.2, 41.0], [91.3, 42.0], [91.4, 42.0], [91.5, 43.0], [91.6, 43.0], [91.7, 43.0], [91.8, 44.0], [91.9, 44.0], [92.0, 45.0], [92.1, 45.0], [92.2, 46.0], [92.3, 46.0], [92.4, 47.0], [92.5, 47.0], [92.6, 48.0], [92.7, 48.0], [92.8, 49.0], [92.9, 49.0], [93.0, 50.0], [93.1, 51.0], [93.2, 51.0], [93.3, 52.0], [93.4, 53.0], [93.5, 53.0], [93.6, 54.0], [93.7, 55.0], [93.8, 55.0], [93.9, 56.0], [94.0, 57.0], [94.1, 58.0], [94.2, 58.0], [94.3, 59.0], [94.4, 60.0], [94.5, 61.0], [94.6, 62.0], [94.7, 63.0], [94.8, 63.0], [94.9, 64.0], [95.0, 65.0], [95.1, 66.0], [95.2, 67.0], [95.3, 68.0], [95.4, 69.0], [95.5, 70.0], [95.6, 71.0], [95.7, 72.0], [95.8, 74.0], [95.9, 75.0], [96.0, 76.0], [96.1, 77.0], [96.2, 79.0], [96.3, 80.0], [96.4, 82.0], [96.5, 84.0], [96.6, 85.0], [96.7, 87.0], [96.8, 89.0], [96.9, 91.0], [97.0, 93.0], [97.1, 95.0], [97.2, 98.0], [97.3, 100.0], [97.4, 103.0], [97.5, 106.0], [97.6, 110.0], [97.7, 114.0], [97.8, 118.0], [97.9, 122.0], [98.0, 127.0], [98.1, 133.0], [98.2, 139.0], [98.3, 147.0], [98.4, 156.0], [98.5, 167.0], [98.6, 180.0], [98.7, 196.0], [98.8, 209.0], [98.9, 216.0], [99.0, 222.0], [99.1, 229.0], [99.2, 239.0], [99.3, 273.0], [99.4, 417.0], [99.5, 1012.0], [99.6, 1015.0], [99.7, 1019.0], [99.8, 1022.0], [99.9, 1029.0], [100.0, 7050.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1945275.0, "series": [{"data": [[0.0, 1945275.0], [600.0, 32.0], [700.0, 14.0], [800.0, 15.0], [900.0, 1.0], [1000.0, 10700.0], [1100.0, 18.0], [1200.0, 304.0], [1300.0, 1.0], [1400.0, 8.0], [100.0, 29133.0], [1800.0, 43.0], [1900.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 96.0], [2600.0, 28.0], [2700.0, 4.0], [3000.0, 147.0], [200.0, 12300.0], [3500.0, 25.0], [300.0, 1187.0], [400.0, 496.0], [7000.0, 106.0], [500.0, 64.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 106.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1988391.0, "series": [{"data": [[0.0, 1988391.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11157.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 346.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 106.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.4546304957904517, "minX": 1.5393276E12, "maxY": 200.0, "series": [{"data": [[1.5393279E12, 178.7750232162758], [1.53932772E12, 200.0], [1.53932784E12, 200.0], [1.53932766E12, 200.0], [1.53932796E12, 3.4546304957904517], [1.53932778E12, 200.0], [1.5393276E12, 161.79671353938832]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53932796E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.7534246575342459, "minX": 1.0, "maxY": 439.1875, "series": [{"data": [[2.0, 25.421052631578938], [3.0, 117.7166666666667], [4.0, 12.236541598694954], [5.0, 74.61052631578949], [6.0, 0.7534246575342459], [7.0, 0.9272151898734183], [8.0, 1.1527777777777775], [9.0, 1.1893004115226329], [10.0, 2.0], [11.0, 15.46511627906977], [12.0, 5.891891891891893], [13.0, 2.8082706766917296], [14.0, 3.4489795918367356], [15.0, 4.460674157303371], [16.0, 4.000000000000001], [17.0, 3.715719063545149], [18.0, 4.681159420289855], [19.0, 4.3233532934131755], [20.0, 4.923076923076922], [21.0, 4.658333333333332], [22.0, 5.510638297872345], [23.0, 5.916167664670658], [24.0, 5.917808219178081], [25.0, 9.683908045977017], [26.0, 6.401795735129068], [27.0, 6.758314855875829], [28.0, 5.668233082706761], [29.0, 4.513840830449826], [30.0, 3.911359724612735], [31.0, 5.857142857142858], [32.0, 9.827586206896553], [33.0, 7.72], [34.0, 5.471526195899768], [35.0, 8.575757575757578], [36.0, 7.164908916586778], [37.0, 19.292469352013995], [38.0, 7.200000000000002], [39.0, 7.165807560137456], [40.0, 6.198399999999999], [41.0, 7.885947046843171], [42.0, 6.486486486486486], [43.0, 10.006944444444448], [44.0, 8.290094339622636], [45.0, 11.66601941747572], [46.0, 12.542372881355936], [47.0, 9.515283842794762], [48.0, 10.597063621533428], [49.0, 11.272251308900511], [50.0, 11.087198515769947], [51.0, 10.317934782608708], [52.0, 13.942857142857141], [53.0, 8.459459459459461], [54.0, 15.786995515695063], [55.0, 18.15238095238096], [56.0, 10.500000000000004], [57.0, 20.667121418826717], [58.0, 13.615384615384611], [59.0, 15.646511627906982], [60.0, 9.202295552367291], [61.0, 14.625000000000005], [62.0, 9.643243243243242], [63.0, 12.572916666666663], [64.0, 29.83870967741936], [65.0, 9.70987654320987], [66.0, 7.744525547445255], [67.0, 13.371024734982333], [68.0, 10.71121351766513], [69.0, 31.205263157894738], [70.0, 16.911379657603206], [71.0, 11.153086419753087], [72.0, 11.07870142646335], [73.0, 15.413173652694606], [74.0, 11.6941489361702], [75.0, 16.704620462046226], [76.0, 9.783606557377052], [77.0, 8.536458333333336], [78.0, 11.840064620355413], [79.0, 20.29310344827587], [80.0, 10.431192660550455], [81.0, 12.55128205128205], [82.0, 14.92410714285715], [83.0, 18.25516621743036], [84.0, 13.223404255319148], [85.0, 11.961346633416465], [86.0, 12.130697050938336], [87.0, 18.073113207547166], [88.0, 15.32956152758133], [89.0, 11.546840958605666], [91.0, 26.359223300970886], [90.0, 68.03846153846156], [92.0, 15.991525423728792], [93.0, 20.47991313789358], [94.0, 10.549783549783552], [95.0, 26.760129659643408], [96.0, 11.248484848484853], [97.0, 14.161451814768467], [98.0, 17.67307692307692], [99.0, 14.533132530120472], [100.0, 16.73828124999999], [101.0, 12.577777777777785], [102.0, 18.31907894736841], [103.0, 15.830306825297424], [104.0, 22.679999999999986], [105.0, 12.289144050104378], [106.0, 15.53906249999999], [107.0, 15.876106194690262], [108.0, 12.062499999999998], [109.0, 18.6532507739938], [110.0, 17.568548387096776], [111.0, 14.508860759493672], [112.0, 15.83267716535434], [113.0, 23.03580901856761], [114.0, 20.019073569482302], [115.0, 16.369272237196785], [116.0, 19.046121593291407], [117.0, 24.56283566058003], [118.0, 25.64197530864197], [119.0, 13.729537366548044], [120.0, 18.616766467065865], [121.0, 23.32075471698114], [122.0, 16.691588785046736], [123.0, 18.223357664233564], [124.0, 23.129528985507292], [125.0, 12.147435897435896], [126.0, 17.47611710323573], [127.0, 19.53784219001611], [128.0, 21.010799136069124], [129.0, 16.746192893401055], [130.0, 19.06934306569343], [131.0, 21.00158478605389], [132.0, 27.049333333333337], [133.0, 16.70317002881843], [134.0, 18.034153005464454], [135.0, 17.027096774193545], [136.0, 17.86744186046512], [137.0, 30.486268174474954], [138.0, 23.489341983317885], [139.0, 17.56936936936937], [140.0, 19.207894736842103], [141.0, 18.695852534562196], [142.0, 23.300194931773902], [143.0, 17.312499999999993], [144.0, 24.187337380745884], [145.0, 19.2431165787932], [146.0, 20.878450920245456], [147.0, 22.512994350282476], [148.0, 16.039548022598858], [149.0, 51.16620498614958], [150.0, 23.320604768365865], [151.0, 25.465290806754233], [152.0, 24.431355181576595], [153.0, 26.736785329018364], [154.0, 22.47460317460319], [155.0, 23.155120481927725], [156.0, 27.68210526315794], [157.0, 26.159523809523808], [158.0, 33.50936967632023], [159.0, 19.759282970550572], [160.0, 14.890243902439025], [161.0, 20.238165680473383], [162.0, 31.074567243675126], [163.0, 29.759358288770052], [164.0, 23.899253731343276], [165.0, 19.333751568381434], [166.0, 22.345864661654137], [167.0, 33.32456140350875], [168.0, 31.347345132743417], [169.0, 25.026045236463325], [170.0, 29.818973862536307], [171.0, 27.31020812685827], [172.0, 20.419075144508675], [173.0, 26.010043041606895], [174.0, 27.394736842105257], [175.0, 15.528409090909088], [176.0, 24.891472868217], [177.0, 28.779804270462655], [178.0, 30.189528795811526], [179.0, 23.845591770022104], [180.0, 19.44381107491855], [181.0, 44.67906066536203], [182.0, 29.120728201852476], [183.0, 37.947058823529424], [184.0, 25.194203616546957], [185.0, 24.825676738178203], [186.0, 28.55569892473112], [187.0, 24.790867579908642], [188.0, 43.43021582733817], [189.0, 22.383128295254846], [190.0, 24.776506955177705], [191.0, 34.2419833729216], [192.0, 30.798609179415923], [193.0, 24.546749777382026], [194.0, 24.496345514950203], [195.0, 77.863309352518], [196.0, 37.91653666146649], [197.0, 26.742279124315914], [198.0, 29.972362038985963], [199.0, 30.138810952507605], [200.0, 29.94904957668584], [1.0, 439.1875]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[195.00807700000254, 29.28917199999958]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2021.6, "minX": 1.5393276E12, "maxY": 5656774.233333333, "series": [{"data": [[1.5393279E12, 5384676.383333334], [1.53932772E12, 5390440.016666667], [1.53932784E12, 5557260.216666667], [1.53932766E12, 5553557.483333333], [1.53932796E12, 15206.666666666666], [1.53932778E12, 5656774.233333333], [1.5393276E12, 611965.2333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5393279E12, 726261.7], [1.53932772E12, 727147.1], [1.53932784E12, 749605.1], [1.53932766E12, 749141.5], [1.53932796E12, 2021.6], [1.53932778E12, 763066.6], [1.5393276E12, 82555.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53932796E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 26.804216243584833, "minX": 1.5393276E12, "maxY": 33.605238540692206, "series": [{"data": [[1.5393279E12, 26.85687005428016], [1.53932772E12, 30.840226482338657], [1.53932784E12, 29.86167060785577], [1.53932766E12, 29.789896551112523], [1.53932796E12, 33.605238540692206], [1.53932778E12, 29.329576973831927], [1.5393276E12, 26.804216243584833]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53932796E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.7652011225444341, "minX": 1.5393276E12, "maxY": 30.510340376721416, "series": [{"data": [[1.5393279E12, 26.19804590935813], [1.53932772E12, 30.510340376721416], [1.53932784E12, 29.39554075392026], [1.53932766E12, 29.42298650016167], [1.53932796E12, 0.7652011225444341], [1.53932778E12, 28.975479919328738], [1.5393276E12, 26.35430715058344]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53932796E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 12.288025635994666, "minX": 1.5393276E12, "maxY": 33.20112254443401, "series": [{"data": [[1.5393279E12, 12.288025635994666], [1.53932772E12, 15.284607927926604], [1.53932784E12, 13.935661042552136], [1.53932766E12, 14.094689082705795], [1.53932796E12, 33.20112254443401], [1.53932778E12, 13.849919079750121], [1.5393276E12, 13.125497687049739]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53932796E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5393276E12, "maxY": 3545.0, "series": [{"data": [[1.5393279E12, 3042.0], [1.53932772E12, 3545.0], [1.53932784E12, 3032.0], [1.53932766E12, 3061.0], [1.53932796E12, 49.0], [1.53932778E12, 3035.0], [1.5393276E12, 1064.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5393279E12, 0.0], [1.53932772E12, 0.0], [1.53932784E12, 1.0], [1.53932766E12, 0.0], [1.53932796E12, 0.0], [1.53932778E12, 0.0], [1.5393276E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5393279E12, 14.0], [1.53932772E12, 37.0], [1.53932784E12, 37.0], [1.53932766E12, 38.0], [1.53932796E12, 13.0], [1.53932778E12, 35.0], [1.5393276E12, 71.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5393279E12, 34.0], [1.53932772E12, 238.0], [1.53932784E12, 228.0], [1.53932766E12, 227.0], [1.53932796E12, 32.9900000000016], [1.53932778E12, 222.0], [1.5393276E12, 321.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5393279E12, 17.0], [1.53932772E12, 63.0], [1.53932784E12, 59.0], [1.53932766E12, 68.0], [1.53932796E12, 17.0], [1.53932778E12, 62.0], [1.5393276E12, 118.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53932796E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1000.0, "maxY": 7023.0, "series": [{"data": [[9000.0, 13.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 13.0], [13000.0, 13.0], [14000.0, 14.0], [15000.0, 14.0], [1000.0, 28.0], [16000.0, 15.0], [17000.0, 15.0], [18000.0, 16.0], [19000.0, 14.0], [20000.0, 19.0], [21000.0, 37.0], [22000.0, 16.0], [23000.0, 21.0], [24000.0, 53.0], [25000.0, 16.0], [28000.0, 18.0], [29000.0, 13.0], [2000.0, 26.0], [3000.0, 23.0], [4000.0, 19.0], [5000.0, 18.0], [6000.0, 16.0], [7000.0, 15.0], [8000.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 7014.0], [10000.0, 7013.0], [11000.0, 7012.0], [3000.0, 7015.0], [12000.0, 7015.0], [13000.0, 7017.0], [4000.0, 7015.0], [1000.0, 7015.0], [5000.0, 7015.0], [6000.0, 7013.5], [7000.0, 7015.0], [8000.0, 7014.0], [2000.0, 7023.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 53.0, "series": [{"data": [[9000.0, 13.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 13.0], [13000.0, 13.0], [14000.0, 14.0], [15000.0, 14.0], [1000.0, 28.0], [16000.0, 15.0], [17000.0, 15.0], [18000.0, 15.0], [19000.0, 14.0], [20000.0, 19.0], [21000.0, 37.0], [22000.0, 15.0], [23000.0, 21.0], [24000.0, 53.0], [25000.0, 14.0], [28000.0, 18.0], [29000.0, 13.0], [2000.0, 25.0], [3000.0, 23.0], [4000.0, 19.0], [5000.0, 18.0], [6000.0, 16.0], [7000.0, 15.0], [8000.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 0.0], [10000.0, 0.0], [11000.0, 0.0], [3000.0, 0.0], [12000.0, 0.0], [13000.0, 0.0], [4000.0, 0.0], [1000.0, 0.0], [5000.0, 0.0], [6000.0, 0.0], [7000.0, 0.0], [8000.0, 0.0], [2000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.733333333333334, "minX": 1.5393276E12, "maxY": 6693.833333333333, "series": [{"data": [[1.5393279E12, 6368.0], [1.53932772E12, 6378.683333333333], [1.53932784E12, 6575.883333333333], [1.53932766E12, 6571.766666666666], [1.53932796E12, 17.733333333333334], [1.53932778E12, 6693.833333333333], [1.5393276E12, 727.4333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53932796E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5393276E12, "maxY": 6693.566666666667, "series": [{"data": [[1.5393279E12, 6370.716666666666], [1.53932772E12, 6378.483333333334], [1.53932784E12, 6575.483333333334], [1.53932766E12, 6571.416666666667], [1.53932796E12, 17.733333333333334], [1.53932778E12, 6693.566666666667], [1.5393276E12, 724.1666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5393279E12, 0.5333333333333333], [1.53932772E12, 0.23333333333333334], [1.53932784E12, 0.36666666666666664], [1.53932766E12, 0.26666666666666666], [1.53932796E12, 0.08333333333333333], [1.53932778E12, 0.26666666666666666], [1.5393276E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53932796E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5393276E12, "maxY": 6693.566666666667, "series": [{"data": [[1.5393279E12, 6370.716666666666], [1.53932772E12, 6378.483333333334], [1.53932784E12, 6575.483333333334], [1.53932766E12, 6571.416666666667], [1.53932796E12, 17.733333333333334], [1.53932778E12, 6693.566666666667], [1.5393276E12, 724.1666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.5393279E12, 0.5333333333333333], [1.53932772E12, 0.23333333333333334], [1.53932784E12, 0.36666666666666664], [1.53932766E12, 0.26666666666666666], [1.53932796E12, 0.08333333333333333], [1.53932778E12, 0.26666666666666666], [1.5393276E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53932796E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5393276E12, "maxY": 6693.566666666667, "series": [{"data": [[1.5393279E12, 6370.716666666666], [1.53932772E12, 6378.483333333334], [1.53932784E12, 6575.483333333334], [1.53932766E12, 6571.416666666667], [1.53932796E12, 17.733333333333334], [1.53932778E12, 6693.566666666667], [1.5393276E12, 724.1666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5393279E12, 0.5333333333333333], [1.53932772E12, 0.23333333333333334], [1.53932784E12, 0.36666666666666664], [1.53932766E12, 0.26666666666666666], [1.53932796E12, 0.08333333333333333], [1.53932778E12, 0.26666666666666666], [1.5393276E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53932796E12, "title": "Total Transactions Per Second"}},
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

