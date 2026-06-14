import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-franc-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaFrancSign {
  readonly viewBox = "0 0 320 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80 32C62.3 32 48 46.3 48 64l0 160 0 96-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0-64 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-96 176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaFrancSign;
