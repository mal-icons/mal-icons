import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-wb-twilight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWbTwilight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.07 9.370.71-0.71a11 0 1 0-1.41-1.41l-0.710.71a11 0 1 0 1.41 1.41zM21 18H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1zM12 7c0.56 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v1c0 0.550.45 1 1 1zM4.96 9.34a11 0 1 0 1.41-1.41l-0.71-0.71a11 0 1 0-1.41 1.41l0.710.71zM19 16c0-3.87-3.13-7-7-7s-7 3.13-7 7h14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWbTwilight;
