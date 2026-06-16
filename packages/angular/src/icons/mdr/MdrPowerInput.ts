import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-power-input",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPowerInput {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 10c0 0.550.45 1 1 1h17c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1zm1 5h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7 0h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7 0h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPowerInput;
