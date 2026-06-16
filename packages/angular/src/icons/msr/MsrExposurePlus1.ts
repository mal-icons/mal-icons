import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-exposure-plus-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrExposurePlus1 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M279.83-280Q267-280 258.5-288.62T250-310v-100H150q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-470h100v-100q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T310-570v100h100q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T410-410H310v100q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM685-200q-14 0-24.5-10.5T650-235v-432l-73 53q-11 8-23.5 5T533-623.38Q525-634 527.5-646.5 530-659 541-667l103-75q11-8 26-9t26.4 5.76q9.77 5.91 16.69 18.58Q720-714 720-703v468q0 14-10.5 24.5T685-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrExposurePlus1;
