import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-send-to-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSendToMobile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18H7V6h10c0 0.550.45 1 1 1s1-0.45 1-1V3c0-1.1-0.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}],["path",{"d":"m21.65 11.65-2.79-2.79a0.50.5 0 0 0-0.860.35V11h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1h4v1.79c0 0.450.540.670.850.35l2.79-2.79c0.2-0.190.2-0.510.01-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSendToMobile;
