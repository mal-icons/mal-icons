import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-background-grid-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBackgroundGridSmall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180h105v-105H180v105Zm165 0h105v-105H345v105Zm165 0h105v-105H510v105Zm165 0h105v-105H675v105ZM180-675h105v-105H180v105Zm0 165h105v-105H180v105Zm0 165h105v-105H180v105Zm165-330h105v-105H345v105Zm0 165h105v-105H345v105Zm0 165h105v-105H345v105Zm165-330h105v-105H510v105Zm0 165h105v-105H510v105Zm0 165h105v-105H510v105Zm165-330h105v-105H675v105Zm0 165h105v-105H675v105Zm0 165h105v-105H675v105ZM120-120v-720h720v720H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBackgroundGridSmall;
