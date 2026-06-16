import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-free-cancellation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFreeCancellation {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M662-60 520-202l42-42 99 99 184-184 42 43L662-60ZM289-287l-42-42 71-71-71-71 42-42 71 71 71-71 42 42-71 71 71 71-42 42-71-71-71 71ZM120-80v-740h125v-60h65v60h340v-60h65v60h125v412l-60 60v-222H180v430h317l60 60H120Zm60-550h600v-130H180v130Zm0 0v-130 130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFreeCancellation;
