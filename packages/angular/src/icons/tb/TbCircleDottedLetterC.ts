import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-circle-dotted-letter-c",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCircleDottedLetterC {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}],["path",{"d":"M7.5 4.21v0.01"}],["path",{"d":"M4.21 7.5v0.01"}],["path",{"d":"M3 12v0.01"}],["path",{"d":"M4.21 16.5v0.01"}],["path",{"d":"M7.5 19.79v0.01"}],["path",{"d":"M12 21v0.01"}],["path",{"d":"M16.5 19.79v0.01"}],["path",{"d":"M19.79 16.5v0.01"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M19.79 7.5v0.01"}],["path",{"d":"M16.5 4.21v0.01"}],["path",{"d":"M12 3v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCircleDottedLetterC;
