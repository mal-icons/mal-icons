import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-airline-seat-recline-normal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAirlineSeatReclineNormal {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-171v-521h60v461h320v60H240Zm198-547q-34 0-57.5-23.5T357-799q0-34 23.5-57.5T438-880q34 0 57.5 23.5T519-799q0 34-23.5 57.5T438-718ZM660-80v-191H340v-302q0-40.74 28.39-68.87 28.39-28.13 69.5-28.13Q479-670 507.5-641.87T536-573v202h184v291h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAirlineSeatReclineNormal;
