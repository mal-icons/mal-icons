import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-emoji-symbols",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEmojiSymbols {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-820q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-880h253q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T403-820H150Zm127.23 285Q265-535 256-544q-9-9-9-21v-153h-97q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-778h253q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T403-718h-97v154q0 12.33-8.27 20.66-8.27 8.34-20.5 8.34ZM526-118q-9-9-9-21.5t9-21.5l270-270q9-9 21-8.5t21 9.5q9 9 9 21.5t-9 21.5L568-117q-9 9-21 8.5t-21-9.5Zm58-207q-23.4 0-38.7-15.3Q530-355.6 530-379q0-23.4 15.3-38.7Q560.6-433 584-433q23.4 0 38.7 15.3Q638-402.4 638-379q0 23.4-15.3 38.7Q607.4-325 584-325Zm202 207q-23.4 0-38.7-15.3Q732-148.6 732-172q0-23.4 15.3-38.7Q762.6-226 786-226q23.4 0 38.7 15.3Q840-195.4 840-172q0 23.4-15.3 38.7Q809.4-118 786-118ZM628-520q-38 0-64-27.5T538-610q0-38 26-64t64-26q13.16 0 23.58 3.5Q662-693 670-688v-163q0-12.32 8.34-20.66Q686.68-880 699-880h112q12.33 0 20.66 8.27 8.34 8.27 8.34 20.5T831.66-830q-8.34 9-20.66 9h-93v211q0 38-26 64t-64 26ZM211-80q-38 0-64.5-26.5T120-171q0-20 7-36.72 7-16.72 21-30.28l52-52-20-20q-14-14-21.5-31.5T151-376q0-38 26.5-64.5T242-467q38 0 64.5 26.5T333-376q0 17-5.5 34.5T308-310l-20 20 50 50 39-39q9-9 21-9t21.39 9Q428-270 428-258t-9 21l-42 42 33 33q8 7.82 8 19.91Q418-130 409.95-122q-8.05 8-20.5 8Q377-114 369-122l-39-38-51 51q-14 14-31 21.5T211-80Zm31-250 23.06-23.06Q270-358 271.5-362.8t1.5-12.8q0-14.4-8.5-22.9Q256-407 242-407t-22.5 8.53Q211-389.95 211-376q0 8 1.5 13t6.44 9.94L242-330Zm-31.18 190Q216-140 223-143t12-8l52-52-43-43-53 53q-5 4.64-7.5 10.82Q181-176 181-170q0 14 8 22t21.82 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEmojiSymbols;
