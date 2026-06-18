import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-circle-dashed-letter-t",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCircleDashedLetterT {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8h4"}],["path",{"d":"M12 8v8"}],["path",{"d":"M8.56 3.69a9 9 0 0 0 -2.92 1.95"}],["path",{"d":"M3.69 8.56a9 9 0 0 0 -0.69 3.44"}],["path",{"d":"M3.69 15.44a9 9 0 0 0 1.95 2.92"}],["path",{"d":"M8.56 20.31a9 9 0 0 0 3.44 0.69"}],["path",{"d":"M15.44 20.31a9 9 0 0 0 2.92 -1.95"}],["path",{"d":"M20.31 15.44a9 9 0 0 0 0.69 -3.44"}],["path",{"d":"M20.31 8.56a9 9 0 0 0 -1.95 -2.92"}],["path",{"d":"M15.44 3.69a9 9 0 0 0 -3.44 -0.69"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCircleDashedLetterT;
