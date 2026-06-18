import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-palette-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPaletteOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 15h-1a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25a9 9 0 0 1 -6.37 -15.36"}],["path",{"d":"M8 4c1.24 -0.62 2.57 -1 4 -1c4.97 0 9 3.58 9 8c0 1.06 -0.47 2.08 -1.32 2.83a4.52 4.52 0 0 1 -1.13 0.73"}],["path",{"d":"M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPaletteOff;
