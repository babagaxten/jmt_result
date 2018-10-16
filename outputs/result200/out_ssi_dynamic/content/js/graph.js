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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7063.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 12.0], [33.0, 12.0], [33.1, 12.0], [33.2, 12.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 13.0], [37.3, 13.0], [37.4, 13.0], [37.5, 13.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 13.0], [38.2, 13.0], [38.3, 13.0], [38.4, 13.0], [38.5, 13.0], [38.6, 13.0], [38.7, 13.0], [38.8, 13.0], [38.9, 13.0], [39.0, 13.0], [39.1, 13.0], [39.2, 13.0], [39.3, 13.0], [39.4, 13.0], [39.5, 13.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 14.0], [40.0, 14.0], [40.1, 14.0], [40.2, 14.0], [40.3, 14.0], [40.4, 14.0], [40.5, 14.0], [40.6, 14.0], [40.7, 14.0], [40.8, 14.0], [40.9, 14.0], [41.0, 14.0], [41.1, 14.0], [41.2, 14.0], [41.3, 14.0], [41.4, 14.0], [41.5, 14.0], [41.6, 14.0], [41.7, 14.0], [41.8, 14.0], [41.9, 14.0], [42.0, 14.0], [42.1, 14.0], [42.2, 14.0], [42.3, 14.0], [42.4, 14.0], [42.5, 14.0], [42.6, 14.0], [42.7, 14.0], [42.8, 14.0], [42.9, 14.0], [43.0, 14.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 14.0], [44.2, 14.0], [44.3, 14.0], [44.4, 14.0], [44.5, 14.0], [44.6, 14.0], [44.7, 14.0], [44.8, 14.0], [44.9, 14.0], [45.0, 14.0], [45.1, 14.0], [45.2, 14.0], [45.3, 15.0], [45.4, 15.0], [45.5, 15.0], [45.6, 15.0], [45.7, 15.0], [45.8, 15.0], [45.9, 15.0], [46.0, 15.0], [46.1, 15.0], [46.2, 15.0], [46.3, 15.0], [46.4, 15.0], [46.5, 15.0], [46.6, 15.0], [46.7, 15.0], [46.8, 15.0], [46.9, 15.0], [47.0, 15.0], [47.1, 15.0], [47.2, 15.0], [47.3, 15.0], [47.4, 15.0], [47.5, 15.0], [47.6, 15.0], [47.7, 15.0], [47.8, 15.0], [47.9, 15.0], [48.0, 15.0], [48.1, 15.0], [48.2, 15.0], [48.3, 15.0], [48.4, 15.0], [48.5, 15.0], [48.6, 15.0], [48.7, 15.0], [48.8, 15.0], [48.9, 15.0], [49.0, 15.0], [49.1, 15.0], [49.2, 15.0], [49.3, 15.0], [49.4, 15.0], [49.5, 15.0], [49.6, 15.0], [49.7, 15.0], [49.8, 15.0], [49.9, 15.0], [50.0, 15.0], [50.1, 15.0], [50.2, 15.0], [50.3, 15.0], [50.4, 15.0], [50.5, 16.0], [50.6, 16.0], [50.7, 16.0], [50.8, 16.0], [50.9, 16.0], [51.0, 16.0], [51.1, 16.0], [51.2, 16.0], [51.3, 16.0], [51.4, 16.0], [51.5, 16.0], [51.6, 16.0], [51.7, 16.0], [51.8, 16.0], [51.9, 16.0], [52.0, 16.0], [52.1, 16.0], [52.2, 16.0], [52.3, 16.0], [52.4, 16.0], [52.5, 16.0], [52.6, 16.0], [52.7, 16.0], [52.8, 16.0], [52.9, 16.0], [53.0, 16.0], [53.1, 16.0], [53.2, 16.0], [53.3, 16.0], [53.4, 16.0], [53.5, 16.0], [53.6, 16.0], [53.7, 16.0], [53.8, 16.0], [53.9, 16.0], [54.0, 16.0], [54.1, 16.0], [54.2, 16.0], [54.3, 16.0], [54.4, 16.0], [54.5, 16.0], [54.6, 16.0], [54.7, 16.0], [54.8, 16.0], [54.9, 16.0], [55.0, 17.0], [55.1, 17.0], [55.2, 17.0], [55.3, 17.0], [55.4, 17.0], [55.5, 17.0], [55.6, 17.0], [55.7, 17.0], [55.8, 17.0], [55.9, 17.0], [56.0, 17.0], [56.1, 17.0], [56.2, 17.0], [56.3, 17.0], [56.4, 17.0], [56.5, 17.0], [56.6, 17.0], [56.7, 17.0], [56.8, 17.0], [56.9, 17.0], [57.0, 17.0], [57.1, 17.0], [57.2, 17.0], [57.3, 17.0], [57.4, 17.0], [57.5, 17.0], [57.6, 17.0], [57.7, 17.0], [57.8, 17.0], [57.9, 17.0], [58.0, 17.0], [58.1, 17.0], [58.2, 17.0], [58.3, 17.0], [58.4, 17.0], [58.5, 17.0], [58.6, 17.0], [58.7, 17.0], [58.8, 17.0], [58.9, 17.0], [59.0, 17.0], [59.1, 17.0], [59.2, 18.0], [59.3, 18.0], [59.4, 18.0], [59.5, 18.0], [59.6, 18.0], [59.7, 18.0], [59.8, 18.0], [59.9, 18.0], [60.0, 18.0], [60.1, 18.0], [60.2, 18.0], [60.3, 18.0], [60.4, 18.0], [60.5, 18.0], [60.6, 18.0], [60.7, 18.0], [60.8, 18.0], [60.9, 18.0], [61.0, 18.0], [61.1, 18.0], [61.2, 18.0], [61.3, 18.0], [61.4, 18.0], [61.5, 18.0], [61.6, 18.0], [61.7, 18.0], [61.8, 18.0], [61.9, 18.0], [62.0, 18.0], [62.1, 18.0], [62.2, 18.0], [62.3, 18.0], [62.4, 18.0], [62.5, 18.0], [62.6, 18.0], [62.7, 18.0], [62.8, 18.0], [62.9, 18.0], [63.0, 19.0], [63.1, 19.0], [63.2, 19.0], [63.3, 19.0], [63.4, 19.0], [63.5, 19.0], [63.6, 19.0], [63.7, 19.0], [63.8, 19.0], [63.9, 19.0], [64.0, 19.0], [64.1, 19.0], [64.2, 19.0], [64.3, 19.0], [64.4, 19.0], [64.5, 19.0], [64.6, 19.0], [64.7, 19.0], [64.8, 19.0], [64.9, 19.0], [65.0, 19.0], [65.1, 19.0], [65.2, 19.0], [65.3, 19.0], [65.4, 19.0], [65.5, 19.0], [65.6, 19.0], [65.7, 19.0], [65.8, 19.0], [65.9, 19.0], [66.0, 19.0], [66.1, 19.0], [66.2, 19.0], [66.3, 19.0], [66.4, 19.0], [66.5, 20.0], [66.6, 20.0], [66.7, 20.0], [66.8, 20.0], [66.9, 20.0], [67.0, 20.0], [67.1, 20.0], [67.2, 20.0], [67.3, 20.0], [67.4, 20.0], [67.5, 20.0], [67.6, 20.0], [67.7, 20.0], [67.8, 20.0], [67.9, 20.0], [68.0, 20.0], [68.1, 20.0], [68.2, 20.0], [68.3, 20.0], [68.4, 20.0], [68.5, 20.0], [68.6, 20.0], [68.7, 20.0], [68.8, 20.0], [68.9, 20.0], [69.0, 20.0], [69.1, 20.0], [69.2, 20.0], [69.3, 20.0], [69.4, 20.0], [69.5, 20.0], [69.6, 20.0], [69.7, 20.0], [69.8, 21.0], [69.9, 21.0], [70.0, 21.0], [70.1, 21.0], [70.2, 21.0], [70.3, 21.0], [70.4, 21.0], [70.5, 21.0], [70.6, 21.0], [70.7, 21.0], [70.8, 21.0], [70.9, 21.0], [71.0, 21.0], [71.1, 21.0], [71.2, 21.0], [71.3, 21.0], [71.4, 21.0], [71.5, 21.0], [71.6, 21.0], [71.7, 21.0], [71.8, 21.0], [71.9, 21.0], [72.0, 21.0], [72.1, 21.0], [72.2, 21.0], [72.3, 21.0], [72.4, 21.0], [72.5, 21.0], [72.6, 21.0], [72.7, 22.0], [72.8, 22.0], [72.9, 22.0], [73.0, 22.0], [73.1, 22.0], [73.2, 22.0], [73.3, 22.0], [73.4, 22.0], [73.5, 22.0], [73.6, 22.0], [73.7, 22.0], [73.8, 22.0], [73.9, 22.0], [74.0, 22.0], [74.1, 22.0], [74.2, 22.0], [74.3, 22.0], [74.4, 22.0], [74.5, 22.0], [74.6, 22.0], [74.7, 22.0], [74.8, 22.0], [74.9, 22.0], [75.0, 22.0], [75.1, 22.0], [75.2, 22.0], [75.3, 22.0], [75.4, 23.0], [75.5, 23.0], [75.6, 23.0], [75.7, 23.0], [75.8, 23.0], [75.9, 23.0], [76.0, 23.0], [76.1, 23.0], [76.2, 23.0], [76.3, 23.0], [76.4, 23.0], [76.5, 23.0], [76.6, 23.0], [76.7, 23.0], [76.8, 23.0], [76.9, 23.0], [77.0, 23.0], [77.1, 23.0], [77.2, 23.0], [77.3, 23.0], [77.4, 23.0], [77.5, 23.0], [77.6, 23.0], [77.7, 23.0], [77.8, 24.0], [77.9, 24.0], [78.0, 24.0], [78.1, 24.0], [78.2, 24.0], [78.3, 24.0], [78.4, 24.0], [78.5, 24.0], [78.6, 24.0], [78.7, 24.0], [78.8, 24.0], [78.9, 24.0], [79.0, 24.0], [79.1, 24.0], [79.2, 24.0], [79.3, 24.0], [79.4, 24.0], [79.5, 24.0], [79.6, 24.0], [79.7, 24.0], [79.8, 25.0], [79.9, 25.0], [80.0, 25.0], [80.1, 25.0], [80.2, 25.0], [80.3, 25.0], [80.4, 25.0], [80.5, 25.0], [80.6, 25.0], [80.7, 25.0], [80.8, 25.0], [80.9, 25.0], [81.0, 25.0], [81.1, 25.0], [81.2, 25.0], [81.3, 25.0], [81.4, 25.0], [81.5, 25.0], [81.6, 26.0], [81.7, 26.0], [81.8, 26.0], [81.9, 26.0], [82.0, 26.0], [82.1, 26.0], [82.2, 26.0], [82.3, 26.0], [82.4, 26.0], [82.5, 26.0], [82.6, 26.0], [82.7, 26.0], [82.8, 26.0], [82.9, 26.0], [83.0, 26.0], [83.1, 27.0], [83.2, 27.0], [83.3, 27.0], [83.4, 27.0], [83.5, 27.0], [83.6, 27.0], [83.7, 27.0], [83.8, 27.0], [83.9, 27.0], [84.0, 27.0], [84.1, 27.0], [84.2, 27.0], [84.3, 27.0], [84.4, 28.0], [84.5, 28.0], [84.6, 28.0], [84.7, 28.0], [84.8, 28.0], [84.9, 28.0], [85.0, 28.0], [85.1, 28.0], [85.2, 28.0], [85.3, 28.0], [85.4, 29.0], [85.5, 29.0], [85.6, 29.0], [85.7, 29.0], [85.8, 29.0], [85.9, 29.0], [86.0, 29.0], [86.1, 29.0], [86.2, 29.0], [86.3, 30.0], [86.4, 30.0], [86.5, 30.0], [86.6, 30.0], [86.7, 30.0], [86.8, 30.0], [86.9, 30.0], [87.0, 30.0], [87.1, 31.0], [87.2, 31.0], [87.3, 31.0], [87.4, 31.0], [87.5, 31.0], [87.6, 31.0], [87.7, 32.0], [87.8, 32.0], [87.9, 32.0], [88.0, 32.0], [88.1, 32.0], [88.2, 32.0], [88.3, 33.0], [88.4, 33.0], [88.5, 33.0], [88.6, 33.0], [88.7, 33.0], [88.8, 34.0], [88.9, 34.0], [89.0, 34.0], [89.1, 34.0], [89.2, 35.0], [89.3, 35.0], [89.4, 35.0], [89.5, 35.0], [89.6, 36.0], [89.7, 36.0], [89.8, 36.0], [89.9, 36.0], [90.0, 37.0], [90.1, 37.0], [90.2, 37.0], [90.3, 37.0], [90.4, 38.0], [90.5, 38.0], [90.6, 38.0], [90.7, 39.0], [90.8, 39.0], [90.9, 39.0], [91.0, 40.0], [91.1, 40.0], [91.2, 40.0], [91.3, 41.0], [91.4, 41.0], [91.5, 42.0], [91.6, 42.0], [91.7, 42.0], [91.8, 43.0], [91.9, 43.0], [92.0, 44.0], [92.1, 44.0], [92.2, 45.0], [92.3, 45.0], [92.4, 46.0], [92.5, 47.0], [92.6, 47.0], [92.7, 48.0], [92.8, 48.0], [92.9, 49.0], [93.0, 50.0], [93.1, 50.0], [93.2, 51.0], [93.3, 51.0], [93.4, 52.0], [93.5, 53.0], [93.6, 53.0], [93.7, 54.0], [93.8, 55.0], [93.9, 56.0], [94.0, 56.0], [94.1, 57.0], [94.2, 58.0], [94.3, 59.0], [94.4, 59.0], [94.5, 60.0], [94.6, 61.0], [94.7, 62.0], [94.8, 63.0], [94.9, 64.0], [95.0, 65.0], [95.1, 66.0], [95.2, 67.0], [95.3, 68.0], [95.4, 69.0], [95.5, 70.0], [95.6, 71.0], [95.7, 73.0], [95.8, 74.0], [95.9, 75.0], [96.0, 77.0], [96.1, 78.0], [96.2, 80.0], [96.3, 82.0], [96.4, 83.0], [96.5, 85.0], [96.6, 87.0], [96.7, 89.0], [96.8, 92.0], [96.9, 94.0], [97.0, 96.0], [97.1, 99.0], [97.2, 102.0], [97.3, 105.0], [97.4, 108.0], [97.5, 111.0], [97.6, 115.0], [97.7, 119.0], [97.8, 124.0], [97.9, 129.0], [98.0, 135.0], [98.1, 141.0], [98.2, 148.0], [98.3, 156.0], [98.4, 166.0], [98.5, 177.0], [98.6, 192.0], [98.7, 207.0], [98.8, 214.0], [98.9, 220.0], [99.0, 227.0], [99.1, 234.0], [99.2, 246.0], [99.3, 290.0], [99.4, 439.0], [99.5, 1012.0], [99.6, 1015.0], [99.7, 1018.0], [99.8, 1021.0], [99.9, 1027.0], [100.0, 7063.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1942543.0, "series": [{"data": [[0.0, 1942543.0], [2100.0, 2.0], [600.0, 34.0], [700.0, 7.0], [3000.0, 127.0], [200.0, 13328.0], [800.0, 21.0], [900.0, 3.0], [1000.0, 10987.0], [1100.0, 36.0], [300.0, 1456.0], [1200.0, 332.0], [4700.0, 1.0], [1300.0, 2.0], [1400.0, 5.0], [100.0, 30372.0], [400.0, 560.0], [1700.0, 1.0], [7000.0, 29.0], [500.0, 154.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1988260.0, "series": [{"data": [[0.0, 1988260.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11580.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 131.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 29.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 160.10449617182815, "minX": 1.53966216E12, "maxY": 200.0, "series": [{"data": [[1.53966246E12, 160.10449617182815], [1.53966228E12, 200.0], [1.5396624E12, 200.0], [1.53966222E12, 200.0], [1.53966234E12, 200.0], [1.53966216E12, 190.03964525490642]], "isOverall": false, "label": "G1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53966246E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.6326530612244899, "minX": 1.0, "maxY": 59.11666666666664, "series": [{"data": [[2.0, 0.6326530612244899], [3.0, 0.8409090909090907], [4.0, 1.1544401544401546], [5.0, 1.6538461538461537], [6.0, 1.9772727272727277], [7.0, 2.5714285714285716], [8.0, 1.937888198757765], [9.0, 3.30065359477124], [10.0, 3.3038674033149174], [11.0, 3.873737373737375], [12.0, 3.161483253588519], [13.0, 3.8055555555555545], [14.0, 3.9452054794520524], [15.0, 4.137096774193553], [16.0, 4.167247386759586], [17.0, 4.016666666666669], [18.0, 5.230769230769233], [19.0, 3.579365079365082], [20.0, 6.151515151515151], [21.0, 5.454987834549884], [22.0, 8.000000000000004], [23.0, 12.12195121951219], [24.0, 6.3442622950819665], [25.0, 4.628668171557564], [26.0, 4.449715370018976], [27.0, 8.862745098039214], [28.0, 6.362573099415209], [29.0, 6.2101449275362315], [30.0, 6.139860139860141], [31.0, 9.694444444444443], [32.0, 7.548387096774195], [33.0, 6.658711217183773], [34.0, 10.790322580645164], [35.0, 6.213592233009708], [36.0, 6.052197802197811], [37.0, 11.357142857142856], [38.0, 8.011494252873565], [39.0, 6.067669172932331], [40.0, 10.634751773049638], [41.0, 9.011037527593825], [42.0, 8.608903020667734], [43.0, 14.46564885496184], [44.0, 10.510344827586207], [45.0, 9.33734939759037], [46.0, 8.926582278481009], [47.0, 8.85135135135135], [48.0, 7.8203124999999964], [49.0, 7.794483985765118], [50.0, 12.036269430051817], [51.0, 8.516129032258062], [52.0, 9.433734939759034], [53.0, 10.422619047619044], [54.0, 10.720207253886008], [55.0, 9.685009487666036], [56.0, 10.909836065573769], [57.0, 13.242187500000005], [58.0, 8.950757575757581], [59.0, 9.783739837398377], [60.0, 11.09230769230769], [61.0, 9.197125256673505], [62.0, 6.480769230769231], [63.0, 8.984962406015041], [64.0, 12.881051175656978], [65.0, 17.79054054054055], [66.0, 17.305719921104558], [67.0, 11.651515151515154], [68.0, 12.148861646234682], [69.0, 10.435967302452314], [70.0, 11.351902173913041], [71.0, 10.215644820295982], [72.0, 10.063758389261736], [73.0, 19.274999999999995], [74.0, 17.0], [75.0, 12.909090909090914], [76.0, 14.009132420091325], [77.0, 9.718085106382981], [78.0, 13.570175438596491], [79.0, 12.220443349753701], [80.0, 12.462585034013609], [81.0, 38.47727272727272], [82.0, 10.64102564102565], [83.0, 15.129518072289159], [84.0, 19.34210526315789], [85.0, 16.214521452145206], [86.0, 32.8186274509804], [87.0, 15.67863894139885], [88.0, 12.163346613545825], [89.0, 13.260032102728744], [90.0, 8.867924528301884], [91.0, 13.29074074074074], [92.0, 9.739413680781757], [93.0, 16.266940451745384], [94.0, 17.668571428571436], [95.0, 16.78914405010438], [96.0, 19.93611793611792], [97.0, 25.19209039548023], [98.0, 21.18446601941749], [99.0, 15.382789317507411], [101.0, 12.673558215451578], [100.0, 17.32692307692309], [102.0, 8.906882591093114], [103.0, 11.39260969976906], [104.0, 19.214859437750995], [105.0, 11.78476821192052], [106.0, 7.552083333333337], [107.0, 17.640875912408756], [108.0, 18.726086956521716], [109.0, 16.793893129770993], [110.0, 22.628048780487802], [111.0, 22.263959390862937], [112.0, 18.131255901794162], [113.0, 19.06697459584293], [114.0, 16.17204301075271], [115.0, 19.93900184842884], [116.0, 14.465753424657557], [117.0, 16.148851148851133], [118.0, 16.640077821011683], [119.0, 18.924666666666603], [120.0, 17.352620087336245], [121.0, 15.290877796901885], [122.0, 20.34593023255812], [123.0, 18.074481074481074], [124.0, 18.202312138728317], [125.0, 14.114982578397216], [126.0, 16.14225053078557], [127.0, 27.21067821067825], [128.0, 18.82698249227602], [129.0, 13.705714285714283], [130.0, 11.398009950248753], [131.0, 13.213953488372091], [132.0, 26.156537753222835], [133.0, 18.57621951219511], [134.0, 13.974874371859284], [135.0, 19.6870981568795], [136.0, 18.03652834599652], [137.0, 21.71115537848606], [138.0, 21.043219076005975], [139.0, 19.322635135135133], [140.0, 20.467511885895394], [141.0, 19.185888738127566], [142.0, 26.00697674418608], [143.0, 24.232258064516127], [144.0, 43.90303907380607], [145.0, 28.723958333333332], [146.0, 21.556135770234977], [147.0, 20.1483550589696], [148.0, 39.66129032258065], [149.0, 24.466292134831466], [151.0, 32.464716006884714], [150.0, 18.019248395967004], [152.0, 20.47089947089946], [153.0, 18.10830704521557], [154.0, 29.86334913112163], [155.0, 19.491150442477874], [156.0, 52.183745583038856], [159.0, 18.604503464203244], [158.0, 39.91739130434787], [157.0, 28.13724088634738], [160.0, 40.46808510638297], [161.0, 46.666666666666664], [163.0, 13.878834355828221], [162.0, 26.58768656716416], [164.0, 24.76891047883416], [165.0, 27.241596638655466], [166.0, 23.94492753623186], [167.0, 29.906195715112933], [168.0, 31.636882129277545], [169.0, 22.583333333333343], [170.0, 44.053435114503806], [171.0, 20.168115942029008], [172.0, 46.83438155136268], [173.0, 21.24513172966784], [174.0, 17.528761061946916], [175.0, 17.414207103551785], [176.0, 14.822299651567935], [177.0, 17.738235294117636], [178.0, 26.471823204419877], [179.0, 23.01466666666666], [180.0, 28.705246295554637], [181.0, 23.9814502529511], [182.0, 41.52354048964219], [183.0, 20.862081128747757], [184.0, 22.30199891950301], [185.0, 20.766055045871553], [186.0, 41.19207317073168], [187.0, 26.82657823630559], [188.0, 40.41130091984232], [189.0, 40.79775280898875], [190.0, 28.75435005117711], [191.0, 24.304295942720763], [192.0, 25.734120917303645], [193.0, 43.23354231974923], [194.0, 29.087030206360282], [195.0, 29.028478543563015], [196.0, 32.214926949480805], [197.0, 23.291674392731323], [198.0, 30.005058365758742], [199.0, 32.62105263157893], [200.0, 28.933867263993005], [1.0, 59.11666666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[195.25823550001851, 28.33246149999974]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 327998.9, "minX": 1.53966216E12, "maxY": 5795433.35, "series": [{"data": [[1.53966246E12, 2740939.3], [1.53966228E12, 5737313.566666666], [1.5396624E12, 5667910.9], [1.53966222E12, 5794728.333333333], [1.53966234E12, 5795433.35], [1.53966216E12, 2431219.9166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53966246E12, 369747.6], [1.53966228E12, 773980.2], [1.5396624E12, 764617.0], [1.53966222E12, 781774.0], [1.53966234E12, 781827.2], [1.53966216E12, 327998.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53966246E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23.854801911515175, "minX": 1.53966216E12, "maxY": 29.324002703522048, "series": [{"data": [[1.53966246E12, 23.854801911515175], [1.53966228E12, 28.90829131542688], [1.5396624E12, 29.324002703522048], [1.53966222E12, 28.593870607106417], [1.53966234E12, 28.68450163428437], [1.53966216E12, 28.24770174534113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53966246E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.566106572118766, "minX": 1.53966216E12, "maxY": 29.115473687872274, "series": [{"data": [[1.53966246E12, 23.566106572118766], [1.53966228E12, 28.696872100273787], [1.5396624E12, 29.115473687872274], [1.53966222E12, 28.521195255918098], [1.53966234E12, 28.49417854408954], [1.53966216E12, 28.140067542909545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53966246E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.475576794614975, "minX": 1.53966216E12, "maxY": 13.886951530422175, "series": [{"data": [[1.53966246E12, 10.475576794614975], [1.53966228E12, 13.670419229881478], [1.5396624E12, 13.886951530422175], [1.53966222E12, 13.50571136927053], [1.53966234E12, 13.443101374257074], [1.53966216E12, 13.456134761427712]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53966246E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.53966216E12, "maxY": 4734.0, "series": [{"data": [[1.53966246E12, 4734.0], [1.53966228E12, 3032.0], [1.5396624E12, 3027.0], [1.53966222E12, 3031.0], [1.53966234E12, 3060.0], [1.53966216E12, 3019.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53966246E12, 0.0], [1.53966228E12, 0.0], [1.5396624E12, 0.0], [1.53966222E12, 0.0], [1.53966234E12, 0.0], [1.53966216E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53966246E12, 13.0], [1.53966228E12, 37.0], [1.5396624E12, 32.0], [1.53966222E12, 40.900000000001455], [1.53966234E12, 36.0], [1.53966216E12, 36.900000000001455]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53966246E12, 43.0], [1.53966228E12, 230.0], [1.5396624E12, 244.0], [1.53966222E12, 224.0], [1.53966234E12, 233.9900000000016], [1.53966216E12, 207.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53966246E12, 17.0], [1.53966228E12, 64.0], [1.5396624E12, 67.0], [1.53966222E12, 73.0], [1.53966234E12, 70.95000000000073], [1.53966216E12, 63.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53966246E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 1000.0, "maxY": 7017.0, "series": [{"data": [[9000.0, 12.0], [10000.0, 12.0], [11000.0, 12.0], [12000.0, 12.0], [13000.0, 13.0], [14000.0, 13.0], [15000.0, 13.0], [1000.0, 35.0], [16000.0, 14.0], [17000.0, 15.0], [18000.0, 15.0], [19000.0, 19.0], [20000.0, 14.0], [21000.0, 14.0], [22000.0, 16.0], [23000.0, 14.0], [24000.0, 19.0], [25000.0, 12.0], [26000.0, 14.0], [27000.0, 11.0], [28000.0, 18.0], [29000.0, 62.0], [2000.0, 27.0], [3000.0, 23.0], [4000.0, 20.0], [5000.0, 18.0], [6000.0, 15.0], [7000.0, 14.0], [8000.0, 13.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 7015.0], [10000.0, 7015.0], [5000.0, 7017.0], [11000.0, 7010.0], [6000.0, 7012.0], [7000.0, 7015.0], [4000.0, 7016.0], [8000.0, 7013.5], [1000.0, 7012.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 62.0, "series": [{"data": [[9000.0, 12.0], [10000.0, 12.0], [11000.0, 12.0], [12000.0, 12.0], [13000.0, 13.0], [14000.0, 13.0], [15000.0, 13.0], [1000.0, 35.0], [16000.0, 14.0], [17000.0, 15.0], [18000.0, 15.0], [19000.0, 19.0], [20000.0, 14.0], [21000.0, 14.0], [22000.0, 16.0], [23000.0, 14.0], [24000.0, 19.0], [25000.0, 12.0], [26000.0, 14.0], [27000.0, 11.0], [28000.0, 18.0], [29000.0, 62.0], [2000.0, 27.0], [3000.0, 23.0], [4000.0, 20.0], [5000.0, 17.0], [6000.0, 15.0], [7000.0, 14.0], [8000.0, 13.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 0.0], [10000.0, 0.0], [5000.0, 0.0], [11000.0, 0.0], [6000.0, 0.0], [7000.0, 0.0], [4000.0, 0.0], [8000.0, 0.0], [1000.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 29000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2880.5, "minX": 1.53966216E12, "maxY": 6858.266666666666, "series": [{"data": [[1.53966246E12, 3240.1833333333334], [1.53966228E12, 6789.416666666667], [1.5396624E12, 6707.283333333334], [1.53966222E12, 6857.683333333333], [1.53966234E12, 6858.266666666666], [1.53966216E12, 2880.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53966246E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.53966216E12, "maxY": 6858.133333333333, "series": [{"data": [[1.53966246E12, 3243.4], [1.53966228E12, 6789.3], [1.5396624E12, 6707.166666666667], [1.53966222E12, 6857.666666666667], [1.53966234E12, 6858.133333333333], [1.53966216E12, 2877.1833333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.53966246E12, 0.1], [1.53966228E12, 0.13333333333333333], [1.5396624E12, 0.13333333333333333], [1.53966234E12, 0.11666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53966246E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.53966216E12, "maxY": 6858.133333333333, "series": [{"data": [[1.53966246E12, 3243.4], [1.53966228E12, 6789.3], [1.5396624E12, 6707.166666666667], [1.53966222E12, 6857.666666666667], [1.53966234E12, 6858.133333333333], [1.53966216E12, 2877.1833333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.53966246E12, 0.1], [1.53966228E12, 0.13333333333333333], [1.5396624E12, 0.13333333333333333], [1.53966234E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53966246E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.53966216E12, "maxY": 6858.133333333333, "series": [{"data": [[1.53966246E12, 3243.4], [1.53966228E12, 6789.3], [1.5396624E12, 6707.166666666667], [1.53966222E12, 6857.666666666667], [1.53966234E12, 6858.133333333333], [1.53966216E12, 2877.1833333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.53966246E12, 0.1], [1.53966228E12, 0.13333333333333333], [1.5396624E12, 0.13333333333333333], [1.53966234E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53966246E12, "title": "Total Transactions Per Second"}},
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

