import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-background-grid-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBackgroundGridSmall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180h105v-105H180v105Zm165 0h105v-105H345v105Zm165 0h105v-105H510v105Zm165 0h105v-105H675v105ZM180-675h105v-105H180v105Zm0 165h105v-105H180v105Zm0 165h105v-105H180v105Zm165-330h105v-105H345v105Zm0 165h105v-105H345v105Zm0 165h105v-105H345v105Zm165-330h105v-105H510v105Zm0 165h105v-105H510v105Zm0 165h105v-105H510v105Zm165-330h105v-105H675v105Zm0 165h105v-105H675v105Zm0 165h105v-105H675v105ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBackgroundGridSmall;
