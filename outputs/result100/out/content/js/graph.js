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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7081.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 7.0], [17.0, 7.0], [17.1, 7.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 7.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 8.0], [24.5, 8.0], [24.6, 8.0], [24.7, 8.0], [24.8, 8.0], [24.9, 8.0], [25.0, 8.0], [25.1, 8.0], [25.2, 8.0], [25.3, 8.0], [25.4, 8.0], [25.5, 8.0], [25.6, 8.0], [25.7, 8.0], [25.8, 8.0], [25.9, 8.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 8.0], [26.5, 8.0], [26.6, 8.0], [26.7, 8.0], [26.8, 8.0], [26.9, 8.0], [27.0, 8.0], [27.1, 8.0], [27.2, 8.0], [27.3, 8.0], [27.4, 8.0], [27.5, 8.0], [27.6, 8.0], [27.7, 8.0], [27.8, 8.0], [27.9, 8.0], [28.0, 8.0], [28.1, 8.0], [28.2, 8.0], [28.3, 8.0], [28.4, 8.0], [28.5, 8.0], [28.6, 8.0], [28.7, 8.0], [28.8, 8.0], [28.9, 8.0], [29.0, 8.0], [29.1, 8.0], [29.2, 8.0], [29.3, 8.0], [29.4, 8.0], [29.5, 8.0], [29.6, 8.0], [29.7, 8.0], [29.8, 8.0], [29.9, 8.0], [30.0, 8.0], [30.1, 8.0], [30.2, 8.0], [30.3, 8.0], [30.4, 8.0], [30.5, 8.0], [30.6, 8.0], [30.7, 8.0], [30.8, 8.0], [30.9, 8.0], [31.0, 8.0], [31.1, 8.0], [31.2, 8.0], [31.3, 8.0], [31.4, 8.0], [31.5, 8.0], [31.6, 8.0], [31.7, 8.0], [31.8, 8.0], [31.9, 8.0], [32.0, 8.0], [32.1, 8.0], [32.2, 8.0], [32.3, 8.0], [32.4, 8.0], [32.5, 8.0], [32.6, 8.0], [32.7, 8.0], [32.8, 9.0], [32.9, 9.0], [33.0, 9.0], [33.1, 9.0], [33.2, 9.0], [33.3, 9.0], [33.4, 9.0], [33.5, 9.0], [33.6, 9.0], [33.7, 9.0], [33.8, 9.0], [33.9, 9.0], [34.0, 9.0], [34.1, 9.0], [34.2, 9.0], [34.3, 9.0], [34.4, 9.0], [34.5, 9.0], [34.6, 9.0], [34.7, 9.0], [34.8, 9.0], [34.9, 9.0], [35.0, 9.0], [35.1, 9.0], [35.2, 9.0], [35.3, 9.0], [35.4, 9.0], [35.5, 9.0], [35.6, 9.0], [35.7, 9.0], [35.8, 9.0], [35.9, 9.0], [36.0, 9.0], [36.1, 9.0], [36.2, 9.0], [36.3, 9.0], [36.4, 9.0], [36.5, 9.0], [36.6, 9.0], [36.7, 9.0], [36.8, 9.0], [36.9, 9.0], [37.0, 9.0], [37.1, 9.0], [37.2, 9.0], [37.3, 9.0], [37.4, 9.0], [37.5, 9.0], [37.6, 9.0], [37.7, 9.0], [37.8, 9.0], [37.9, 9.0], [38.0, 9.0], [38.1, 9.0], [38.2, 9.0], [38.3, 9.0], [38.4, 9.0], [38.5, 9.0], [38.6, 9.0], [38.7, 9.0], [38.8, 9.0], [38.9, 9.0], [39.0, 9.0], [39.1, 9.0], [39.2, 9.0], [39.3, 9.0], [39.4, 9.0], [39.5, 9.0], [39.6, 9.0], [39.7, 9.0], [39.8, 9.0], [39.9, 9.0], [40.0, 9.0], [40.1, 9.0], [40.2, 9.0], [40.3, 9.0], [40.4, 9.0], [40.5, 9.0], [40.6, 9.0], [40.7, 10.0], [40.8, 10.0], [40.9, 10.0], [41.0, 10.0], [41.1, 10.0], [41.2, 10.0], [41.3, 10.0], [41.4, 10.0], [41.5, 10.0], [41.6, 10.0], [41.7, 10.0], [41.8, 10.0], [41.9, 10.0], [42.0, 10.0], [42.1, 10.0], [42.2, 10.0], [42.3, 10.0], [42.4, 10.0], [42.5, 10.0], [42.6, 10.0], [42.7, 10.0], [42.8, 10.0], [42.9, 10.0], [43.0, 10.0], [43.1, 10.0], [43.2, 10.0], [43.3, 10.0], [43.4, 10.0], [43.5, 10.0], [43.6, 10.0], [43.7, 10.0], [43.8, 10.0], [43.9, 10.0], [44.0, 10.0], [44.1, 10.0], [44.2, 10.0], [44.3, 10.0], [44.4, 10.0], [44.5, 10.0], [44.6, 10.0], [44.7, 10.0], [44.8, 10.0], [44.9, 10.0], [45.0, 10.0], [45.1, 10.0], [45.2, 10.0], [45.3, 10.0], [45.4, 10.0], [45.5, 10.0], [45.6, 10.0], [45.7, 10.0], [45.8, 10.0], [45.9, 10.0], [46.0, 10.0], [46.1, 10.0], [46.2, 10.0], [46.3, 10.0], [46.4, 10.0], [46.5, 10.0], [46.6, 10.0], [46.7, 10.0], [46.8, 10.0], [46.9, 10.0], [47.0, 10.0], [47.1, 10.0], [47.2, 10.0], [47.3, 10.0], [47.4, 10.0], [47.5, 10.0], [47.6, 10.0], [47.7, 10.0], [47.8, 10.0], [47.9, 10.0], [48.0, 11.0], [48.1, 11.0], [48.2, 11.0], [48.3, 11.0], [48.4, 11.0], [48.5, 11.0], [48.6, 11.0], [48.7, 11.0], [48.8, 11.0], [48.9, 11.0], [49.0, 11.0], [49.1, 11.0], [49.2, 11.0], [49.3, 11.0], [49.4, 11.0], [49.5, 11.0], [49.6, 11.0], [49.7, 11.0], [49.8, 11.0], [49.9, 11.0], [50.0, 11.0], [50.1, 11.0], [50.2, 11.0], [50.3, 11.0], [50.4, 11.0], [50.5, 11.0], [50.6, 11.0], [50.7, 11.0], [50.8, 11.0], [50.9, 11.0], [51.0, 11.0], [51.1, 11.0], [51.2, 11.0], [51.3, 11.0], [51.4, 11.0], [51.5, 11.0], [51.6, 11.0], [51.7, 11.0], [51.8, 11.0], [51.9, 11.0], [52.0, 11.0], [52.1, 11.0], [52.2, 11.0], [52.3, 11.0], [52.4, 11.0], [52.5, 11.0], [52.6, 11.0], [52.7, 11.0], [52.8, 11.0], [52.9, 11.0], [53.0, 11.0], [53.1, 11.0], [53.2, 11.0], [53.3, 11.0], [53.4, 11.0], [53.5, 11.0], [53.6, 11.0], [53.7, 11.0], [53.8, 11.0], [53.9, 11.0], [54.0, 11.0], [54.1, 11.0], [54.2, 11.0], [54.3, 11.0], [54.4, 11.0], [54.5, 12.0], [54.6, 12.0], [54.7, 12.0], [54.8, 12.0], [54.9, 12.0], [55.0, 12.0], [55.1, 12.0], [55.2, 12.0], [55.3, 12.0], [55.4, 12.0], [55.5, 12.0], [55.6, 12.0], [55.7, 12.0], [55.8, 12.0], [55.9, 12.0], [56.0, 12.0], [56.1, 12.0], [56.2, 12.0], [56.3, 12.0], [56.4, 12.0], [56.5, 12.0], [56.6, 12.0], [56.7, 12.0], [56.8, 12.0], [56.9, 12.0], [57.0, 12.0], [57.1, 12.0], [57.2, 12.0], [57.3, 12.0], [57.4, 12.0], [57.5, 12.0], [57.6, 12.0], [57.7, 12.0], [57.8, 12.0], [57.9, 12.0], [58.0, 12.0], [58.1, 12.0], [58.2, 12.0], [58.3, 12.0], [58.4, 12.0], [58.5, 12.0], [58.6, 12.0], [58.7, 12.0], [58.8, 12.0], [58.9, 12.0], [59.0, 12.0], [59.1, 12.0], [59.2, 12.0], [59.3, 12.0], [59.4, 12.0], [59.5, 12.0], [59.6, 12.0], [59.7, 12.0], [59.8, 12.0], [59.9, 12.0], [60.0, 12.0], [60.1, 12.0], [60.2, 13.0], [60.3, 13.0], [60.4, 13.0], [60.5, 13.0], [60.6, 13.0], [60.7, 13.0], [60.8, 13.0], [60.9, 13.0], [61.0, 13.0], [61.1, 13.0], [61.2, 13.0], [61.3, 13.0], [61.4, 13.0], [61.5, 13.0], [61.6, 13.0], [61.7, 13.0], [61.8, 13.0], [61.9, 13.0], [62.0, 13.0], [62.1, 13.0], [62.2, 13.0], [62.3, 13.0], [62.4, 13.0], [62.5, 13.0], [62.6, 13.0], [62.7, 13.0], [62.8, 13.0], [62.9, 13.0], [63.0, 13.0], [63.1, 13.0], [63.2, 13.0], [63.3, 13.0], [63.4, 13.0], [63.5, 13.0], [63.6, 13.0], [63.7, 13.0], [63.8, 13.0], [63.9, 13.0], [64.0, 13.0], [64.1, 13.0], [64.2, 13.0], [64.3, 13.0], [64.4, 13.0], [64.5, 13.0], [64.6, 13.0], [64.7, 13.0], [64.8, 13.0], [64.9, 13.0], [65.0, 13.0], [65.1, 13.0], [65.2, 14.0], [65.3, 14.0], [65.4, 14.0], [65.5, 14.0], [65.6, 14.0], [65.7, 14.0], [65.8, 14.0], [65.9, 14.0], [66.0, 14.0], [66.1, 14.0], [66.2, 14.0], [66.3, 14.0], [66.4, 14.0], [66.5, 14.0], [66.6, 14.0], [66.7, 14.0], [66.8, 14.0], [66.9, 14.0], [67.0, 14.0], [67.1, 14.0], [67.2, 14.0], [67.3, 14.0], [67.4, 14.0], [67.5, 14.0], [67.6, 14.0], [67.7, 14.0], [67.8, 14.0], [67.9, 14.0], [68.0, 14.0], [68.1, 14.0], [68.2, 14.0], [68.3, 14.0], [68.4, 14.0], [68.5, 14.0], [68.6, 14.0], [68.7, 14.0], [68.8, 14.0], [68.9, 14.0], [69.0, 14.0], [69.1, 14.0], [69.2, 14.0], [69.3, 14.0], [69.4, 15.0], [69.5, 15.0], [69.6, 15.0], [69.7, 15.0], [69.8, 15.0], [69.9, 15.0], [70.0, 15.0], [70.1, 15.0], [70.2, 15.0], [70.3, 15.0], [70.4, 15.0], [70.5, 15.0], [70.6, 15.0], [70.7, 15.0], [70.8, 15.0], [70.9, 15.0], [71.0, 15.0], [71.1, 15.0], [71.2, 15.0], [71.3, 15.0], [71.4, 15.0], [71.5, 15.0], [71.6, 15.0], [71.7, 15.0], [71.8, 15.0], [71.9, 15.0], [72.0, 15.0], [72.1, 15.0], [72.2, 15.0], [72.3, 15.0], [72.4, 15.0], [72.5, 15.0], [72.6, 15.0], [72.7, 15.0], [72.8, 15.0], [72.9, 15.0], [73.0, 15.0], [73.1, 16.0], [73.2, 16.0], [73.3, 16.0], [73.4, 16.0], [73.5, 16.0], [73.6, 16.0], [73.7, 16.0], [73.8, 16.0], [73.9, 16.0], [74.0, 16.0], [74.1, 16.0], [74.2, 16.0], [74.3, 16.0], [74.4, 16.0], [74.5, 16.0], [74.6, 16.0], [74.7, 16.0], [74.8, 16.0], [74.9, 16.0], [75.0, 16.0], [75.1, 16.0], [75.2, 16.0], [75.3, 16.0], [75.4, 16.0], [75.5, 16.0], [75.6, 16.0], [75.7, 16.0], [75.8, 16.0], [75.9, 16.0], [76.0, 16.0], [76.1, 16.0], [76.2, 16.0], [76.3, 16.0], [76.4, 17.0], [76.5, 17.0], [76.6, 17.0], [76.7, 17.0], [76.8, 17.0], [76.9, 17.0], [77.0, 17.0], [77.1, 17.0], [77.2, 17.0], [77.3, 17.0], [77.4, 17.0], [77.5, 17.0], [77.6, 17.0], [77.7, 17.0], [77.8, 17.0], [77.9, 17.0], [78.0, 17.0], [78.1, 17.0], [78.2, 17.0], [78.3, 17.0], [78.4, 17.0], [78.5, 17.0], [78.6, 17.0], [78.7, 17.0], [78.8, 17.0], [78.9, 17.0], [79.0, 17.0], [79.1, 17.0], [79.2, 17.0], [79.3, 17.0], [79.4, 18.0], [79.5, 18.0], [79.6, 18.0], [79.7, 18.0], [79.8, 18.0], [79.9, 18.0], [80.0, 18.0], [80.1, 18.0], [80.2, 18.0], [80.3, 18.0], [80.4, 18.0], [80.5, 18.0], [80.6, 18.0], [80.7, 18.0], [80.8, 18.0], [80.9, 18.0], [81.0, 18.0], [81.1, 18.0], [81.2, 18.0], [81.3, 18.0], [81.4, 18.0], [81.5, 18.0], [81.6, 18.0], [81.7, 18.0], [81.8, 18.0], [81.9, 18.0], [82.0, 19.0], [82.1, 19.0], [82.2, 19.0], [82.3, 19.0], [82.4, 19.0], [82.5, 19.0], [82.6, 19.0], [82.7, 19.0], [82.8, 19.0], [82.9, 19.0], [83.0, 19.0], [83.1, 19.0], [83.2, 19.0], [83.3, 19.0], [83.4, 19.0], [83.5, 19.0], [83.6, 19.0], [83.7, 19.0], [83.8, 19.0], [83.9, 19.0], [84.0, 19.0], [84.1, 19.0], [84.2, 20.0], [84.3, 20.0], [84.4, 20.0], [84.5, 20.0], [84.6, 20.0], [84.7, 20.0], [84.8, 20.0], [84.9, 20.0], [85.0, 20.0], [85.1, 20.0], [85.2, 20.0], [85.3, 20.0], [85.4, 20.0], [85.5, 20.0], [85.6, 20.0], [85.7, 20.0], [85.8, 20.0], [85.9, 21.0], [86.0, 21.0], [86.1, 21.0], [86.2, 21.0], [86.3, 21.0], [86.4, 21.0], [86.5, 21.0], [86.6, 21.0], [86.7, 21.0], [86.8, 21.0], [86.9, 21.0], [87.0, 21.0], [87.1, 21.0], [87.2, 21.0], [87.3, 22.0], [87.4, 22.0], [87.5, 22.0], [87.6, 22.0], [87.7, 22.0], [87.8, 22.0], [87.9, 22.0], [88.0, 22.0], [88.1, 22.0], [88.2, 22.0], [88.3, 23.0], [88.4, 23.0], [88.5, 23.0], [88.6, 23.0], [88.7, 23.0], [88.8, 23.0], [88.9, 23.0], [89.0, 23.0], [89.1, 23.0], [89.2, 24.0], [89.3, 24.0], [89.4, 24.0], [89.5, 24.0], [89.6, 24.0], [89.7, 24.0], [89.8, 24.0], [89.9, 24.0], [90.0, 25.0], [90.1, 25.0], [90.2, 25.0], [90.3, 25.0], [90.4, 25.0], [90.5, 25.0], [90.6, 25.0], [90.7, 25.0], [90.8, 26.0], [90.9, 26.0], [91.0, 26.0], [91.1, 26.0], [91.2, 26.0], [91.3, 26.0], [91.4, 26.0], [91.5, 27.0], [91.6, 27.0], [91.7, 27.0], [91.8, 27.0], [91.9, 27.0], [92.0, 27.0], [92.1, 27.0], [92.2, 28.0], [92.3, 28.0], [92.4, 28.0], [92.5, 28.0], [92.6, 28.0], [92.7, 28.0], [92.8, 29.0], [92.9, 29.0], [93.0, 29.0], [93.1, 29.0], [93.2, 29.0], [93.3, 30.0], [93.4, 30.0], [93.5, 30.0], [93.6, 30.0], [93.7, 30.0], [93.8, 31.0], [93.9, 31.0], [94.0, 31.0], [94.1, 31.0], [94.2, 32.0], [94.3, 32.0], [94.4, 32.0], [94.5, 33.0], [94.6, 33.0], [94.7, 33.0], [94.8, 34.0], [94.9, 34.0], [95.0, 34.0], [95.1, 35.0], [95.2, 35.0], [95.3, 36.0], [95.4, 36.0], [95.5, 37.0], [95.6, 37.0], [95.7, 38.0], [95.8, 38.0], [95.9, 39.0], [96.0, 39.0], [96.1, 40.0], [96.2, 40.0], [96.3, 41.0], [96.4, 42.0], [96.5, 43.0], [96.6, 43.0], [96.7, 44.0], [96.8, 45.0], [96.9, 45.0], [97.0, 46.0], [97.1, 47.0], [97.2, 48.0], [97.3, 49.0], [97.4, 50.0], [97.5, 51.0], [97.6, 52.0], [97.7, 53.0], [97.8, 54.0], [97.9, 55.0], [98.0, 56.0], [98.1, 58.0], [98.2, 59.0], [98.3, 61.0], [98.4, 62.0], [98.5, 64.0], [98.6, 66.0], [98.7, 68.0], [98.8, 70.0], [98.9, 72.0], [99.0, 75.0], [99.1, 78.0], [99.2, 82.0], [99.3, 86.0], [99.4, 92.0], [99.5, 98.0], [99.6, 107.0], [99.7, 119.0], [99.8, 138.0], [99.9, 178.0], [100.0, 7081.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 995188.0, "series": [{"data": [[0.0, 995188.0], [300.0, 50.0], [600.0, 2.0], [700.0, 1.0], [100.0, 4038.0], [200.0, 479.0], [400.0, 13.0], [7000.0, 75.0], [900.0, 2.0], [500.0, 6.0], [1000.0, 146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 999768.0, "series": [{"data": [[0.0, 999768.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 157.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 75.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.389339513325611, "minX": 1.53933E12, "maxY": 100.0, "series": [{"data": [[1.53933012E12, 93.4658250948932], [1.53933006E12, 100.0], [1.53933E12, 96.68384624791166], [1.53933018E12, 3.389339513325611]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53933018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.8282674772036484, "minX": 1.0, "maxY": 7015.0, "series": [{"data": [[2.0, 7015.0], [3.0, 0.8282674772036484], [4.0, 1.3333333333333333], [5.0, 1.25854700854701], [6.0, 2.0977596741344193], [7.0, 2.109983079526223], [8.0, 2.9078947368421058], [9.0, 3.8365384615384626], [10.0, 2.942396313364055], [11.0, 3.2571428571428584], [12.0, 3.141274238227145], [13.0, 4.719999999999998], [14.0, 3.579545454545458], [15.0, 17.53267326732674], [16.0, 11.346555323590815], [17.0, 4.5339578454332585], [18.0, 20.718820861677997], [19.0, 5.072761194029846], [20.0, 4.9450800915331765], [21.0, 5.580808080808079], [22.0, 5.230769230769245], [23.0, 5.57936507936508], [24.0, 6.9116022099447525], [25.0, 5.412262156448202], [26.0, 11.28813559322034], [27.0, 5.307053941908712], [28.0, 5.806682577565636], [29.0, 5.689552238805963], [30.0, 6.343527738264576], [31.0, 7.784560143626577], [32.0, 7.931603773584908], [33.0, 8.547619047619056], [34.0, 6.248434237995818], [35.0, 7.125348189415043], [36.0, 7.711024135681672], [37.0, 8.304487179487175], [38.0, 10.064935064935064], [39.0, 9.773486430062627], [40.0, 10.182741116751263], [41.0, 11.500000000000004], [42.0, 10.714285714285712], [43.0, 8.550488599348533], [44.0, 8.846153846153856], [45.0, 7.067484662576686], [46.0, 7.587692307692302], [47.0, 12.036363636363633], [48.0, 7.4586666666666686], [49.0, 6.427402862985687], [50.0, 7.920886075949362], [51.0, 8.622967142383022], [52.0, 12.316129032258074], [53.0, 10.03934426229508], [54.0, 7.970251716247133], [55.0, 8.131386861313857], [56.0, 10.270676691729314], [57.0, 9.878542510121454], [58.0, 13.48440065681444], [59.0, 11.495440729483285], [60.0, 11.438902743142153], [61.0, 11.544861337683532], [62.0, 9.709829867674854], [63.0, 12.069172932330828], [64.0, 9.778287461773697], [65.0, 10.905889884763148], [66.0, 11.260303687635565], [67.0, 8.973459715639803], [68.0, 10.731060606060604], [69.0, 10.489921121822965], [70.0, 16.276018099547507], [71.0, 12.290976058931847], [72.0, 12.96316886726893], [73.0, 10.464583333333334], [74.0, 11.134146341463417], [75.0, 10.55621594848937], [76.0, 12.258222077499179], [77.0, 10.722762645914393], [78.0, 12.897251308900522], [79.0, 18.668304668304653], [80.0, 12.653444676409189], [81.0, 10.853515624999996], [82.0, 11.238007380073816], [83.0, 12.834036568213781], [84.0, 11.856960408684543], [85.0, 11.29896907216494], [86.0, 13.241715399610136], [87.0, 12.567493112947655], [88.0, 12.660351201478765], [89.0, 15.939923306348527], [90.0, 12.53674832962137], [91.0, 18.310450038138786], [92.0, 18.36789900811545], [93.0, 13.100309837335404], [94.0, 15.484248788368369], [95.0, 14.533087670812233], [96.0, 13.47970479704796], [97.0, 15.882923047102139], [98.0, 15.976477776080571], [99.0, 14.921311174364154], [100.0, 15.370319966230143], [1.0, 18.20750000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[96.59932499999812, 14.982072000000192]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3275.6, "minX": 1.53933E12, "maxY": 5388059.716666667, "series": [{"data": [[1.53933012E12, 5217599.35], [1.53933006E12, 5388059.716666667], [1.53933E12, 3455579.55], [1.53933018E12, 24368.466666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53933012E12, 703739.1], [1.53933006E12, 726748.1], [1.53933E12, 466094.7], [1.53933018E12, 3275.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53933018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9.101969872537666, "minX": 1.53933E12, "maxY": 15.37558492756028, "series": [{"data": [[1.53933012E12, 14.541455868775625], [1.53933006E12, 15.37558492756028], [1.53933E12, 15.075139607874922], [1.53933018E12, 9.101969872537666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53933018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.9466975666280429, "minX": 1.53933E12, "maxY": 14.814904084950982, "series": [{"data": [[1.53933012E12, 13.926720623727832], [1.53933006E12, 14.814904084950982], [1.53933E12, 14.502139974728037], [1.53933018E12, 0.9466975666280429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53933018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.906918670259031, "minX": 1.53933E12, "maxY": 8.538238702201607, "series": [{"data": [[1.53933012E12, 4.906918670259031], [1.53933006E12, 5.173256196964416], [1.53933E12, 5.208221579097661], [1.53933018E12, 8.538238702201607]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53933018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.53933E12, "maxY": 1050.0, "series": [{"data": [[1.53933012E12, 1049.0], [1.53933006E12, 1050.0], [1.53933E12, 1032.0], [1.53933018E12, 3.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53933012E12, 0.0], [1.53933006E12, 0.0], [1.53933E12, 0.0], [1.53933018E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53933012E12, 10.0], [1.53933006E12, 27.0], [1.53933E12, 24.0], [1.53933018E12, 9.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53933012E12, 19.0], [1.53933006E12, 70.0], [1.53933E12, 75.9900000000016], [1.53933018E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53933012E12, 13.0], [1.53933006E12, 33.0], [1.53933E12, 37.0], [1.53933018E12, 11.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53933018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7.0, "minX": 1000.0, "maxY": 7020.0, "series": [{"data": [[9000.0, 9.0], [10000.0, 8.0], [11000.0, 8.0], [12000.0, 8.0], [13000.0, 9.0], [14000.0, 9.0], [15000.0, 9.0], [1000.0, 18.0], [16000.0, 10.0], [17000.0, 9.0], [18000.0, 9.0], [19000.0, 9.0], [20000.0, 11.0], [21000.0, 8.0], [22000.0, 7.0], [23000.0, 16.0], [24000.0, 11.0], [25000.0, 45.0], [28000.0, 9.0], [2000.0, 17.0], [3000.0, 16.0], [4000.0, 13.0], [5000.0, 12.0], [6000.0, 11.0], [7000.0, 10.0], [8000.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 7015.0], [5000.0, 7013.5], [10000.0, 7014.0], [11000.0, 7019.0], [3000.0, 7020.0], [6000.0, 7014.0], [13000.0, 7015.0], [7000.0, 7016.0], [8000.0, 7014.5], [4000.0, 7013.0], [2000.0, 7013.0], [1000.0, 7015.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 28000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 45.0, "series": [{"data": [[9000.0, 9.0], [10000.0, 8.0], [11000.0, 8.0], [12000.0, 8.0], [13000.0, 9.0], [14000.0, 9.0], [15000.0, 9.0], [1000.0, 18.0], [16000.0, 10.0], [17000.0, 8.0], [18000.0, 9.0], [19000.0, 9.0], [20000.0, 11.0], [21000.0, 7.5], [22000.0, 7.0], [23000.0, 16.0], [24000.0, 10.0], [25000.0, 45.0], [28000.0, 8.5], [2000.0, 17.0], [3000.0, 15.0], [4000.0, 13.0], [5000.0, 12.0], [6000.0, 11.0], [7000.0, 10.0], [8000.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 0.0], [5000.0, 0.0], [10000.0, 0.0], [11000.0, 0.0], [3000.0, 0.0], [6000.0, 0.0], [13000.0, 0.0], [7000.0, 0.0], [8000.0, 0.0], [4000.0, 0.0], [2000.0, 0.0], [1000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 28000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 28.666666666666668, "minX": 1.53933E12, "maxY": 6375.266666666666, "series": [{"data": [[1.53933012E12, 6172.25], [1.53933006E12, 6375.266666666666], [1.53933E12, 4090.483333333333], [1.53933018E12, 28.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53933018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.53933E12, "maxY": 6374.983333333334, "series": [{"data": [[1.53933012E12, 6173.15], [1.53933006E12, 6374.983333333334], [1.53933E12, 4088.55], [1.53933018E12, 28.733333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.53933012E12, 0.48333333333333334], [1.53933006E12, 0.45], [1.53933E12, 0.2833333333333333], [1.53933018E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53933018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.53933E12, "maxY": 6374.983333333334, "series": [{"data": [[1.53933012E12, 6173.15], [1.53933006E12, 6374.983333333334], [1.53933E12, 4088.55], [1.53933018E12, 28.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.53933012E12, 0.48333333333333334], [1.53933006E12, 0.45], [1.53933E12, 0.2833333333333333], [1.53933018E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53933018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.53933E12, "maxY": 6374.983333333334, "series": [{"data": [[1.53933012E12, 6173.15], [1.53933006E12, 6374.983333333334], [1.53933E12, 4088.55], [1.53933018E12, 28.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.53933012E12, 0.48333333333333334], [1.53933006E12, 0.45], [1.53933E12, 0.2833333333333333], [1.53933018E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53933018E12, "title": "Total Transactions Per Second"}},
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

