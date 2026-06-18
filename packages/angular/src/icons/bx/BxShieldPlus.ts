import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-shield-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxShieldPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.63 21.91A0.90.9 0 0 0 12 22a1 1 0 0 0 0.41-0.09C22 17.67 21 7 21 6.9a1 1 0 0 0-0.55-0.79l-8-4a1 1 0 0 0-0.9 0l-8 4A1 1 0 0 0 3 6.9c0 0.1-0.92 10.77 8.63 15.01zM5 7.63l7-3.51 7 3.51c0.05 2-0.27 9-7 12.27C5.26 16.63 4.94 9.64 5 7.63z"}],["path",{"d":"M11.06 16h2v-3h3.01v-2h-3.01V8h-2v3h-3v2h3v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxShieldPlus;
