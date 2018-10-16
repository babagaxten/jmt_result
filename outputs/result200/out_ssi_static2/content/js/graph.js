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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7023.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 11.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 13.0], [37.3, 13.0], [37.4, 13.0], [37.5, 13.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 14.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 14.0], [40.0, 14.0], [40.1, 14.0], [40.2, 14.0], [40.3, 14.0], [40.4, 14.0], [40.5, 14.0], [40.6, 14.0], [40.7, 14.0], [40.8, 14.0], [40.9, 14.0], [41.0, 14.0], [41.1, 14.0], [41.2, 14.0], [41.3, 14.0], [41.4, 14.0], [41.5, 14.0], [41.6, 14.0], [41.7, 14.0], [41.8, 14.0], [41.9, 14.0], [42.0, 14.0], [42.1, 14.0], [42.2, 14.0], [42.3, 14.0], [42.4, 14.0], [42.5, 14.0], [42.6, 14.0], [42.7, 14.0], [42.8, 14.0], [42.9, 14.0], [43.0, 14.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 15.0], [45.3, 15.0], [45.4, 15.0], [45.5, 15.0], [45.6, 15.0], [45.7, 15.0], [45.8, 15.0], [45.9, 15.0], [46.0, 15.0], [46.1, 15.0], [46.2, 15.0], [46.3, 15.0], [46.4, 15.0], [46.5, 15.0], [46.6, 15.0], [46.7, 15.0], [46.8, 15.0], [46.9, 15.0], [47.0, 15.0], [47.1, 15.0], [47.2, 15.0], [47.3, 15.0], [47.4, 15.0], [47.5, 15.0], [47.6, 15.0], [47.7, 15.0], [47.8, 15.0], [47.9, 15.0], [48.0, 15.0], [48.1, 15.0], [48.2, 15.0], [48.3, 15.0], [48.4, 15.0], [48.5, 15.0], [48.6, 15.0], [48.7, 15.0], [48.8, 15.0], [48.9, 15.0], [49.0, 15.0], [49.1, 15.0], [49.2, 15.0], [49.3, 15.0], [49.4, 16.0], [49.5, 16.0], [49.6, 16.0], [49.7, 16.0], [49.8, 16.0], [49.9, 16.0], [50.0, 16.0], [50.1, 16.0], [50.2, 16.0], [50.3, 16.0], [50.4, 16.0], [50.5, 16.0], [50.6, 16.0], [50.7, 16.0], [50.8, 16.0], [50.9, 16.0], [51.0, 16.0], [51.1, 16.0], [51.2, 16.0], [51.3, 16.0], [51.4, 16.0], [51.5, 16.0], [51.6, 16.0], [51.7, 16.0], [51.8, 16.0], [51.9, 16.0], [52.0, 16.0], [52.1, 16.0], [52.2, 16.0], [52.3, 16.0], [52.4, 16.0], [52.5, 16.0], [52.6, 16.0], [52.7, 16.0], [52.8, 16.0], [52.9, 16.0], [53.0, 16.0], [53.1, 16.0], [53.2, 16.0], [53.3, 16.0], [53.4, 16.0], [53.5, 16.0], [53.6, 16.0], [53.7, 16.0], [53.8, 16.0], [53.9, 16.0], [54.0, 16.0], [54.1, 16.0], [54.2, 17.0], [54.3, 17.0], [54.4, 17.0], [54.5, 17.0], [54.6, 17.0], [54.7, 17.0], [54.8, 17.0], [54.9, 17.0], [55.0, 17.0], [55.1, 17.0], [55.2, 17.0], [55.3, 17.0], [55.4, 17.0], [55.5, 17.0], [55.6, 17.0], [55.7, 17.0], [55.8, 17.0], [55.9, 17.0], [56.0, 17.0], [56.1, 17.0], [56.2, 17.0], [56.3, 17.0], [56.4, 17.0], [56.5, 17.0], [56.6, 17.0], [56.7, 17.0], [56.8, 17.0], [56.9, 17.0], [57.0, 17.0], [57.1, 17.0], [57.2, 17.0], [57.3, 17.0], [57.4, 17.0], [57.5, 17.0], [57.6, 17.0], [57.7, 17.0], [57.8, 17.0], [57.9, 17.0], [58.0, 17.0], [58.1, 17.0], [58.2, 17.0], [58.3, 17.0], [58.4, 17.0], [58.5, 18.0], [58.6, 18.0], [58.7, 18.0], [58.8, 18.0], [58.9, 18.0], [59.0, 18.0], [59.1, 18.0], [59.2, 18.0], [59.3, 18.0], [59.4, 18.0], [59.5, 18.0], [59.6, 18.0], [59.7, 18.0], [59.8, 18.0], [59.9, 18.0], [60.0, 18.0], [60.1, 18.0], [60.2, 18.0], [60.3, 18.0], [60.4, 18.0], [60.5, 18.0], [60.6, 18.0], [60.7, 18.0], [60.8, 18.0], [60.9, 18.0], [61.0, 18.0], [61.1, 18.0], [61.2, 18.0], [61.3, 18.0], [61.4, 18.0], [61.5, 18.0], [61.6, 18.0], [61.7, 18.0], [61.8, 18.0], [61.9, 18.0], [62.0, 18.0], [62.1, 18.0], [62.2, 18.0], [62.3, 18.0], [62.4, 18.0], [62.5, 19.0], [62.6, 19.0], [62.7, 19.0], [62.8, 19.0], [62.9, 19.0], [63.0, 19.0], [63.1, 19.0], [63.2, 19.0], [63.3, 19.0], [63.4, 19.0], [63.5, 19.0], [63.6, 19.0], [63.7, 19.0], [63.8, 19.0], [63.9, 19.0], [64.0, 19.0], [64.1, 19.0], [64.2, 19.0], [64.3, 19.0], [64.4, 19.0], [64.5, 19.0], [64.6, 19.0], [64.7, 19.0], [64.8, 19.0], [64.9, 19.0], [65.0, 19.0], [65.1, 19.0], [65.2, 19.0], [65.3, 19.0], [65.4, 19.0], [65.5, 19.0], [65.6, 19.0], [65.7, 19.0], [65.8, 19.0], [65.9, 19.0], [66.0, 19.0], [66.1, 20.0], [66.2, 20.0], [66.3, 20.0], [66.4, 20.0], [66.5, 20.0], [66.6, 20.0], [66.7, 20.0], [66.8, 20.0], [66.9, 20.0], [67.0, 20.0], [67.1, 20.0], [67.2, 20.0], [67.3, 20.0], [67.4, 20.0], [67.5, 20.0], [67.6, 20.0], [67.7, 20.0], [67.8, 20.0], [67.9, 20.0], [68.0, 20.0], [68.1, 20.0], [68.2, 20.0], [68.3, 20.0], [68.4, 20.0], [68.5, 20.0], [68.6, 20.0], [68.7, 20.0], [68.8, 20.0], [68.9, 20.0], [69.0, 20.0], [69.1, 20.0], [69.2, 20.0], [69.3, 20.0], [69.4, 21.0], [69.5, 21.0], [69.6, 21.0], [69.7, 21.0], [69.8, 21.0], [69.9, 21.0], [70.0, 21.0], [70.1, 21.0], [70.2, 21.0], [70.3, 21.0], [70.4, 21.0], [70.5, 21.0], [70.6, 21.0], [70.7, 21.0], [70.8, 21.0], [70.9, 21.0], [71.0, 21.0], [71.1, 21.0], [71.2, 21.0], [71.3, 21.0], [71.4, 21.0], [71.5, 21.0], [71.6, 21.0], [71.7, 21.0], [71.8, 21.0], [71.9, 21.0], [72.0, 21.0], [72.1, 21.0], [72.2, 21.0], [72.3, 21.0], [72.4, 22.0], [72.5, 22.0], [72.6, 22.0], [72.7, 22.0], [72.8, 22.0], [72.9, 22.0], [73.0, 22.0], [73.1, 22.0], [73.2, 22.0], [73.3, 22.0], [73.4, 22.0], [73.5, 22.0], [73.6, 22.0], [73.7, 22.0], [73.8, 22.0], [73.9, 22.0], [74.0, 22.0], [74.1, 22.0], [74.2, 22.0], [74.3, 22.0], [74.4, 22.0], [74.5, 22.0], [74.6, 22.0], [74.7, 22.0], [74.8, 22.0], [74.9, 22.0], [75.0, 22.0], [75.1, 23.0], [75.2, 23.0], [75.3, 23.0], [75.4, 23.0], [75.5, 23.0], [75.6, 23.0], [75.7, 23.0], [75.8, 23.0], [75.9, 23.0], [76.0, 23.0], [76.1, 23.0], [76.2, 23.0], [76.3, 23.0], [76.4, 23.0], [76.5, 23.0], [76.6, 23.0], [76.7, 23.0], [76.8, 23.0], [76.9, 23.0], [77.0, 23.0], [77.1, 23.0], [77.2, 23.0], [77.3, 23.0], [77.4, 24.0], [77.5, 24.0], [77.6, 24.0], [77.7, 24.0], [77.8, 24.0], [77.9, 24.0], [78.0, 24.0], [78.1, 24.0], [78.2, 24.0], [78.3, 24.0], [78.4, 24.0], [78.5, 24.0], [78.6, 24.0], [78.7, 24.0], [78.8, 24.0], [78.9, 24.0], [79.0, 24.0], [79.1, 24.0], [79.2, 24.0], [79.3, 24.0], [79.4, 24.0], [79.5, 25.0], [79.6, 25.0], [79.7, 25.0], [79.8, 25.0], [79.9, 25.0], [80.0, 25.0], [80.1, 25.0], [80.2, 25.0], [80.3, 25.0], [80.4, 25.0], [80.5, 25.0], [80.6, 25.0], [80.7, 25.0], [80.8, 25.0], [80.9, 25.0], [81.0, 25.0], [81.1, 25.0], [81.2, 25.0], [81.3, 26.0], [81.4, 26.0], [81.5, 26.0], [81.6, 26.0], [81.7, 26.0], [81.8, 26.0], [81.9, 26.0], [82.0, 26.0], [82.1, 26.0], [82.2, 26.0], [82.3, 26.0], [82.4, 26.0], [82.5, 26.0], [82.6, 26.0], [82.7, 26.0], [82.8, 26.0], [82.9, 27.0], [83.0, 27.0], [83.1, 27.0], [83.2, 27.0], [83.3, 27.0], [83.4, 27.0], [83.5, 27.0], [83.6, 27.0], [83.7, 27.0], [83.8, 27.0], [83.9, 27.0], [84.0, 27.0], [84.1, 27.0], [84.2, 27.0], [84.3, 28.0], [84.4, 28.0], [84.5, 28.0], [84.6, 28.0], [84.7, 28.0], [84.8, 28.0], [84.9, 28.0], [85.0, 28.0], [85.1, 28.0], [85.2, 28.0], [85.3, 28.0], [85.4, 29.0], [85.5, 29.0], [85.6, 29.0], [85.7, 29.0], [85.8, 29.0], [85.9, 29.0], [86.0, 29.0], [86.1, 29.0], [86.2, 29.0], [86.3, 29.0], [86.4, 30.0], [86.5, 30.0], [86.6, 30.0], [86.7, 30.0], [86.8, 30.0], [86.9, 30.0], [87.0, 30.0], [87.1, 30.0], [87.2, 31.0], [87.3, 31.0], [87.4, 31.0], [87.5, 31.0], [87.6, 31.0], [87.7, 31.0], [87.8, 31.0], [87.9, 32.0], [88.0, 32.0], [88.1, 32.0], [88.2, 32.0], [88.3, 32.0], [88.4, 32.0], [88.5, 33.0], [88.6, 33.0], [88.7, 33.0], [88.8, 33.0], [88.9, 33.0], [89.0, 34.0], [89.1, 34.0], [89.2, 34.0], [89.3, 34.0], [89.4, 35.0], [89.5, 35.0], [89.6, 35.0], [89.7, 35.0], [89.8, 36.0], [89.9, 36.0], [90.0, 36.0], [90.1, 36.0], [90.2, 37.0], [90.3, 37.0], [90.4, 37.0], [90.5, 38.0], [90.6, 38.0], [90.7, 38.0], [90.8, 39.0], [90.9, 39.0], [91.0, 39.0], [91.1, 40.0], [91.2, 40.0], [91.3, 40.0], [91.4, 41.0], [91.5, 41.0], [91.6, 41.0], [91.7, 42.0], [91.8, 42.0], [91.9, 43.0], [92.0, 43.0], [92.1, 44.0], [92.2, 44.0], [92.3, 45.0], [92.4, 45.0], [92.5, 46.0], [92.6, 46.0], [92.7, 47.0], [92.8, 47.0], [92.9, 48.0], [93.0, 49.0], [93.1, 49.0], [93.2, 50.0], [93.3, 50.0], [93.4, 51.0], [93.5, 52.0], [93.6, 52.0], [93.7, 53.0], [93.8, 54.0], [93.9, 54.0], [94.0, 55.0], [94.1, 56.0], [94.2, 57.0], [94.3, 57.0], [94.4, 58.0], [94.5, 59.0], [94.6, 60.0], [94.7, 61.0], [94.8, 62.0], [94.9, 63.0], [95.0, 63.0], [95.1, 64.0], [95.2, 65.0], [95.3, 66.0], [95.4, 67.0], [95.5, 69.0], [95.6, 70.0], [95.7, 71.0], [95.8, 72.0], [95.9, 73.0], [96.0, 75.0], [96.1, 76.0], [96.2, 78.0], [96.3, 79.0], [96.4, 81.0], [96.5, 83.0], [96.6, 85.0], [96.7, 87.0], [96.8, 89.0], [96.9, 91.0], [97.0, 93.0], [97.1, 96.0], [97.2, 99.0], [97.3, 101.0], [97.4, 105.0], [97.5, 108.0], [97.6, 112.0], [97.7, 116.0], [97.8, 121.0], [97.9, 126.0], [98.0, 132.0], [98.1, 138.0], [98.2, 145.0], [98.3, 153.0], [98.4, 163.0], [98.5, 175.0], [98.6, 190.0], [98.7, 207.0], [98.8, 214.0], [98.9, 221.0], [99.0, 227.0], [99.1, 235.0], [99.2, 249.0], [99.3, 292.0], [99.4, 443.0], [99.5, 1012.0], [99.6, 1014.0], [99.7, 1018.0], [99.8, 1021.0], [99.9, 1027.0], [100.0, 7023.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1944600.0, "series": [{"data": [[0.0, 1944600.0], [600.0, 42.0], [700.0, 25.0], [3000.0, 150.0], [200.0, 13235.0], [800.0, 94.0], [3200.0, 4.0], [900.0, 18.0], [1000.0, 10950.0], [1100.0, 23.0], [300.0, 1389.0], [1200.0, 311.0], [1400.0, 4.0], [100.0, 28373.0], [400.0, 639.0], [1700.0, 6.0], [7000.0, 16.0], [500.0, 121.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1988237.0, "series": [{"data": [[0.0, 1988237.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11587.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 16.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 161.2863216561383, "minX": 1.53965916E12, "maxY": 200.0, "series": [{"data": [[1.53965946E12, 161.2863216561383], [1.53965928E12, 200.0], [1.53965934E12, 200.0], [1.53965916E12, 191.25509718388082], [1.53965922E12, 200.0], [1.5396594E12, 200.0]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965946E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.8387096774193549, "minX": 1.0, "maxY": 80.48363636363648, "series": [{"data": [[2.0, 0.9885714285714274], [3.0, 0.8387096774193549], [4.0, 1.0], [5.0, 1.2619047619047625], [6.0, 1.514705882352941], [7.0, 1.8614718614718613], [8.0, 2.129032258064517], [9.0, 3.214285714285714], [10.0, 2.9225092250922495], [11.0, 3.921200750469042], [12.0, 3.2935483870967754], [13.0, 3.601796407185629], [14.0, 6.729166666666667], [15.0, 5.082706766917295], [16.0, 5.304347826086955], [17.0, 4.8104575163398655], [18.0, 6.040816326530612], [19.0, 6.453416149068325], [20.0, 4.591677503250973], [21.0, 4.823970037453185], [22.0, 5.500000000000001], [23.0, 4.062745098039222], [24.0, 5.122807017543859], [25.0, 3.9383561643835603], [26.0, 3.5000000000000018], [27.0, 6.6630434782608745], [28.0, 6.503355704697987], [29.0, 6.1679999999999975], [30.0, 8.968992248062015], [31.0, 6.786802030456855], [32.0, 5.463894967177245], [33.0, 6.8015564202334655], [34.0, 5.499999999999998], [35.0, 16.486486486486488], [36.0, 13.504424778761061], [37.0, 8.974683544303799], [38.0, 8.279005524861876], [39.0, 7.196629213483142], [40.0, 10.251012145748987], [41.0, 7.9802816901408455], [42.0, 13.745098039215684], [43.0, 6.6991735537190085], [44.0, 8.117647058823527], [45.0, 10.721763085399457], [46.0, 8.691558441558438], [47.0, 10.24163568773234], [48.0, 11.067272727272737], [49.0, 12.34920634920635], [50.0, 9.17585301837269], [51.0, 8.439622641509441], [52.0, 9.008695652173916], [53.0, 12.34751773049646], [54.0, 23.24475524475525], [55.0, 9.053664921465954], [56.0, 9.715261958997718], [57.0, 14.720763723150364], [58.0, 11.62946428571429], [59.0, 15.13178294573643], [60.0, 18.717391304347835], [61.0, 12.063636363636363], [62.0, 10.578688524590167], [63.0, 10.146997929606627], [64.0, 13.400921658986174], [65.0, 15.185289957567171], [66.0, 11.507352941176475], [67.0, 11.994117647058818], [68.0, 22.099999999999987], [69.0, 12.699999999999998], [70.0, 14.336322869955156], [71.0, 10.288461538461537], [72.0, 17.349896480331235], [73.0, 10.293902439024402], [74.0, 14.282485875706215], [75.0, 10.14047619047619], [76.0, 12.781477627471382], [77.0, 36.42168674698793], [78.0, 12.271739130434792], [79.0, 9.748344370860929], [80.0, 29.48556430446195], [81.0, 11.433161953727522], [82.0, 14.91], [83.0, 14.641791044776125], [84.0, 21.914498141263934], [85.0, 9.298181818181806], [86.0, 13.154191616766468], [87.0, 13.201207243460766], [88.0, 13.477869467366826], [89.0, 14.009708737864088], [90.0, 14.280232558139522], [91.0, 17.24523809523808], [92.0, 12.62499999999999], [93.0, 14.809611829944538], [94.0, 41.382978723404264], [95.0, 17.388888888888893], [96.0, 19.20812182741118], [97.0, 17.694158075601358], [98.0, 16.223495702005724], [99.0, 13.019801980198025], [100.0, 22.916666666666654], [101.0, 14.346666666666664], [102.0, 15.579999999999998], [103.0, 14.159021406727838], [104.0, 15.266037735849068], [105.0, 16.149917627677073], [106.0, 20.092940125111717], [107.0, 13.00568181818182], [108.0, 21.773946360153257], [109.0, 13.943679599499372], [110.0, 17.114649681528675], [111.0, 18.387559808612433], [112.0, 19.40120663650076], [113.0, 16.06651108518087], [114.0, 14.531711555169434], [115.0, 15.580204778156997], [116.0, 15.33333333333333], [117.0, 11.238709677419358], [118.0, 11.76063829787234], [119.0, 9.384615384615387], [120.0, 22.067448680351884], [121.0, 19.22036082474228], [122.0, 16.570713391739705], [123.0, 29.640997830802597], [124.0, 25.38688524590165], [125.0, 20.377850162866444], [126.0, 22.51048951048952], [127.0, 31.7962962962963], [128.0, 21.11307420494699], [129.0, 16.160377358490575], [130.0, 15.957209302325575], [131.0, 16.82083333333334], [132.0, 23.42033898305087], [133.0, 16.59231590181428], [134.0, 18.241743725231203], [135.0, 35.733333333333334], [136.0, 22.827768014059753], [137.0, 22.198529411764678], [138.0, 20.99999999999999], [139.0, 16.3706540954626], [140.0, 19.154053015751025], [141.0, 26.948051948051948], [142.0, 18.679945054945037], [143.0, 22.955156950672635], [144.0, 30.26190476190477], [145.0, 24.193877551020385], [146.0, 22.468761832639135], [147.0, 19.861878453038692], [148.0, 22.050403225806463], [149.0, 18.936807095343667], [150.0, 52.35087719298249], [151.0, 28.23018867924527], [152.0, 18.554311310190368], [153.0, 22.835564053537286], [154.0, 23.937019969278055], [155.0, 32.903954802259875], [156.0, 44.204678362573084], [157.0, 23.33884297520661], [158.0, 42.109057301293916], [159.0, 22.447661469933166], [160.0, 22.150150150150136], [161.0, 22.603571428571424], [162.0, 19.14257028112448], [163.0, 19.14414414414416], [164.0, 18.157088122605362], [165.0, 30.33679245283017], [166.0, 24.691358024691368], [167.0, 23.320388349514577], [168.0, 41.69804400977995], [169.0, 21.118078719146098], [170.0, 33.728301886792444], [171.0, 25.902048085485294], [172.0, 32.59305301645333], [173.0, 22.87067517635199], [174.0, 21.351771823681926], [175.0, 26.772565742715017], [176.0, 28.721476510067124], [177.0, 18.138121546961315], [178.0, 22.188291139240523], [179.0, 30.400746733042922], [180.0, 37.27782162588793], [181.0, 18.672000000000015], [182.0, 21.771393643031793], [183.0, 25.562499999999996], [184.0, 32.554083885209735], [185.0, 21.93183883671618], [186.0, 32.769889840881255], [187.0, 24.48155339805825], [188.0, 32.17382413087935], [189.0, 28.028717201166216], [190.0, 26.631916132789723], [191.0, 22.07453416149068], [192.0, 31.961152335224817], [193.0, 23.337849046170923], [194.0, 30.902735562310006], [195.0, 28.8406038868963], [196.0, 26.849836905871385], [197.0, 34.557619047619106], [198.0, 26.364677992888094], [199.0, 80.48363636363648], [200.0, 28.906383509696848], [1.0, 25.72142857142856]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[195.70437599999724, 28.39807850000078]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 339300.1, "minX": 1.53965916E12, "maxY": 5780720.533333333, "series": [{"data": [[1.53965946E12, 2557358.783333333], [1.53965928E12, 5768084.8], [1.53965934E12, 5780720.533333333], [1.53965916E12, 2514987.5833333335], [1.53965922E12, 5774744.083333333], [1.5396594E12, 5771255.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53965946E12, 344992.5], [1.53965928E12, 778173.5], [1.53965934E12, 779830.3], [1.53965916E12, 339300.1], [1.53965922E12, 779077.9], [1.5396594E12, 778595.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965946E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24.144102566926172, "minX": 1.53965916E12, "maxY": 28.952122030026224, "series": [{"data": [[1.53965946E12, 24.144102566926172], [1.53965928E12, 28.91121821635525], [1.53965934E12, 28.80164503978598], [1.53965916E12, 28.952122030026224], [1.53965922E12, 28.71437978153393], [1.5396594E12, 28.808018272818966]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965946E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.92133451555532, "minX": 1.53965916E12, "maxY": 28.845687342856635, "series": [{"data": [[1.53965946E12, 23.92133451555532], [1.53965928E12, 28.8213718912217], [1.53965934E12, 28.579184594318953], [1.53965916E12, 28.845687342856635], [1.53965922E12, 28.643935606439122], [1.5396594E12, 28.70301057373448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965946E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.327471789138398, "minX": 1.53965916E12, "maxY": 13.773188534805191, "series": [{"data": [[1.53965946E12, 10.327471789138398], [1.53965928E12, 13.257653223167804], [1.53965934E12, 13.534304147195902], [1.53965916E12, 13.627783781967569], [1.53965922E12, 13.773188534805191], [1.5396594E12, 13.36096137280445]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965946E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.53965916E12, "maxY": 3244.0, "series": [{"data": [[1.53965946E12, 3067.0], [1.53965928E12, 3028.0], [1.53965934E12, 3244.0], [1.53965916E12, 3026.0], [1.53965922E12, 3027.0], [1.5396594E12, 3218.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53965946E12, 0.0], [1.53965928E12, 0.0], [1.53965934E12, 0.0], [1.53965916E12, 0.0], [1.53965922E12, 0.0], [1.5396594E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53965946E12, 14.0], [1.53965928E12, 37.0], [1.53965934E12, 34.0], [1.53965916E12, 38.0], [1.53965922E12, 37.0], [1.5396594E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53965946E12, 37.0], [1.53965928E12, 243.0], [1.53965934E12, 237.0], [1.53965916E12, 225.9800000000032], [1.53965922E12, 209.9900000000016], [1.5396594E12, 224.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53965946E12, 17.0], [1.53965928E12, 66.0], [1.53965934E12, 67.0], [1.53965916E12, 78.0], [1.53965922E12, 66.0], [1.5396594E12, 68.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12.5, "minX": 1000.0, "maxY": 7022.0, "series": [{"data": [[9000.0, 13.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 13.0], [13000.0, 13.0], [14000.0, 13.0], [15000.0, 14.0], [1000.0, 33.0], [16000.0, 15.0], [17000.0, 16.0], [18000.0, 17.0], [19000.0, 19.0], [20000.0, 17.0], [21000.0, 49.5], [22000.0, 52.0], [23000.0, 61.0], [24000.0, 48.0], [25000.0, 66.0], [27000.0, 47.5], [2000.0, 26.0], [32000.0, 12.5], [3000.0, 24.0], [4000.0, 19.0], [5000.0, 18.0], [6000.0, 16.0], [7000.0, 15.0], [8000.0, 13.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 7020.0], [5000.0, 7017.5], [10000.0, 7016.5], [11000.0, 7022.0], [6000.0, 7015.0], [8000.0, 7013.5], [4000.0, 7015.0], [1000.0, 7011.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 32000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 66.0, "series": [{"data": [[9000.0, 13.0], [10000.0, 13.0], [11000.0, 13.0], [12000.0, 13.0], [13000.0, 13.0], [14000.0, 13.0], [15000.0, 14.0], [1000.0, 33.0], [16000.0, 15.0], [17000.0, 15.0], [18000.0, 17.0], [19000.0, 18.0], [20000.0, 17.0], [21000.0, 49.5], [22000.0, 52.0], [23000.0, 61.0], [24000.0, 48.0], [25000.0, 66.0], [27000.0, 47.5], [2000.0, 26.0], [32000.0, 12.5], [3000.0, 24.0], [4000.0, 19.0], [5000.0, 18.0], [6000.0, 16.0], [7000.0, 15.0], [8000.0, 13.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 0.0], [5000.0, 0.0], [10000.0, 0.0], [11000.0, 0.0], [6000.0, 0.0], [8000.0, 0.0], [4000.0, 0.0], [1000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 32000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2979.65, "minX": 1.53965916E12, "maxY": 6840.666666666667, "series": [{"data": [[1.53965946E12, 3023.0], [1.53965928E12, 6826.116666666667], [1.53965934E12, 6840.666666666667], [1.53965916E12, 2979.65], [1.53965922E12, 6834.0], [1.5396594E12, 6829.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965946E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53965916E12, "maxY": 6840.616666666667, "series": [{"data": [[1.53965946E12, 3026.25], [1.53965928E12, 6826.083333333333], [1.53965934E12, 6840.616666666667], [1.53965916E12, 2976.3166666666666], [1.53965922E12, 6834.016666666666], [1.5396594E12, 6829.783333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.53965946E12, 0.06666666666666667], [1.53965928E12, 0.016666666666666666], [1.53965934E12, 0.15], [1.5396594E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53965946E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53965916E12, "maxY": 6840.616666666667, "series": [{"data": [[1.53965946E12, 3026.25], [1.53965928E12, 6826.083333333333], [1.53965934E12, 6840.616666666667], [1.53965916E12, 2976.3166666666666], [1.53965922E12, 6834.016666666666], [1.5396594E12, 6829.783333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.53965946E12, 0.06666666666666667], [1.53965928E12, 0.016666666666666666], [1.53965934E12, 0.15], [1.5396594E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965946E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.53965916E12, "maxY": 6840.616666666667, "series": [{"data": [[1.53965946E12, 3026.25], [1.53965928E12, 6826.083333333333], [1.53965934E12, 6840.616666666667], [1.53965916E12, 2976.3166666666666], [1.53965922E12, 6834.016666666666], [1.5396594E12, 6829.783333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.53965946E12, 0.06666666666666667], [1.53965928E12, 0.016666666666666666], [1.53965934E12, 0.15], [1.5396594E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53965946E12, "title": "Total Transactions Per Second"}},
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

