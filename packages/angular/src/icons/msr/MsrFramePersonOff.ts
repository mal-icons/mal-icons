import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-frame-person-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFramePersonOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M812-62.91 794-80H678q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T678-140h56L634-240H270q-12.75 0-21.37-8.62T240-270v-46q0-20 10-36.5t27-29.5q33-26 80-39.5t79-16.5L140-734v56q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Q97-648 88.5-656.62T80-678v-116l-33-33q-9-9.07-8.5-21.53Q39-861 48.05-870q9.05-9 21.5-9Q82-879 91-870l764 765q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-62.91ZM574-300l-80-80q-58 0-105 13t-89 39v28h274Zm26-300q0 32-15 58t-39 42l-44-44q17-7 27.5-21.5T540-600q0-25.5-17.25-42.75T480-660q-20 0-34.5 10.5T424-622l-44-44q16-24 42-39t58-15q50 0 85 35t35 85Zm280 318v116l-60-60v-56q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T880-282ZM140-80q-24 0-42-18t-18-42v-142q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-282v142h142q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q312-97 303.38-88.5T282-80H140Zm680-598v-142H678q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T678-880h142q24 0 42 18t18 42v142q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T820-678Zm-357 95Zm31 283ZM166-880h116q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T282-820h-56l-60-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFramePersonOff;
