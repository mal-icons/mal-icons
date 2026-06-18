import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-library-photo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLibraryPhoto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 5.67a2.67 2.67 0 0 1 2.67 -2.67h8.67a2.67 2.67 0 0 1 2.67 2.67v8.67a2.67 2.67 0 0 1 -2.67 2.67h-8.67a2.67 2.67 0 0 1 -2.67 -2.67l0 -8.67"}],["path",{"d":"M4.01 7.26a2.01 2.01 0 0 0 -1.01 1.74v10c0 1.1 0.9 2 2 2h10c0.75 0 1.16 -0.38 1.5 -1"}],["path",{"d":"M17 7h0.01"}],["path",{"d":"M7 13l3.64 -3.64a1.21 1.21 0 0 1 1.71 0l3.64 3.64"}],["path",{"d":"M15 12l1.64 -1.64a1.21 1.21 0 0 1 1.71 0l2.64 2.64"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLibraryPhoto;
