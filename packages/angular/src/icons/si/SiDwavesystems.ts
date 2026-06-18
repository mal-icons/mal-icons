import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dwavesystems",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDwavesystems {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.11 12c0 1.58-1.28 2.86-2.87 2.86-1.58 0-2.87-1.28-2.87-2.86 0-1.58 1.28-2.86 2.87-2.86 1.58 0 2.87 1.28 2.87 2.86zM7.24 0C5.65 0 4.37 1.28 4.37 2.86s1.28 2.86 2.87 2.86c1.58 0 2.87-1.28 2.87-2.86C10.11 1.28 8.82 0 7.24 0zm9.52 18.28c-1.58 0-2.87 1.28-2.87 2.86 0 1.58 1.28 2.86 2.87 2.86 1.58 0 2.87-1.28 2.87-2.86 0-1.59-1.28-2.86-2.87-2.86zm-2.87-6.27c0-1.58 1.28-2.86 2.87-2.86 1.58 0 2.87 1.28 2.87 2.86 0 1.58-1.28 2.86-2.87 2.86-1.58 0-2.87-1.28-2.87-2.86zm0.5 0c0 1.3 1.06 2.36 2.37 2.36s2.37-1.06 2.37-2.36c0-1.3-1.06-2.36-2.37-2.36s-2.37 1.06-2.37 2.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDwavesystems;
