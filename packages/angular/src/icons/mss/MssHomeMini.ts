import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-home-mini",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHomeMini {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M350-200q-110 0-190-82.5T80-480q0-38 18.5-86t64-91.5q45.5-43.5 123-73T480-760q117 0 194.5 29.5t123 73q45.5 43.5 64 91.5t18.5 86q0 115-82.5 197.5T600-200H350Zm3-60h244q81 0 138-44t77-116H148q18 72 73.5 116T353-260Zm127-160Zm0-30Zm-340-30h680q0-32-17-70.5T746.5-622q-39.5-33-105-55.5T480-700q-96 0-161.5 22.5t-105 55.5Q174-589 157-550.5T140-480Zm340 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHomeMini;
