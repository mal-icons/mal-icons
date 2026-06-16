import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-edgesensor-high",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEdgesensorHigh {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 7c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1V8c0-0.550.45-1 1-1zm-3 3c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5c0-0.550.45-1 1-1zm22-3c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1V8c0-0.550.45-1 1-1zm-3 3c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5c0-0.550.45-1 1-1zm-4-7.99L8 2c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-1.99-2-1.99zM16 17H8V7h8v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEdgesensorHigh;
