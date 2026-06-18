import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-id-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxIdCard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.72 12c1.15 0 2-0.85 2-2s-0.85-2-2-2-2 0.85-2 2 0.85 2 2 2z"}],["path",{"d":"M20 4H4c-1.1 0-2 0.84-2 1.88v12.25C2 19.16 2.9 20 4 20h16c1.1 0 2-0.84 2-1.87V5.88C22 4.84 21.1 4 20 4zm0 14-16-0.01V6l16 0.01V18z"}],["path",{"d":"M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.54c0-1.37-1.68-2.79-3.71-2.79S6 14.16 6 15.54V16h7.43v-0.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxIdCard;
