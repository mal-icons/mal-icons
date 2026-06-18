import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-crop-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCropAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 4 L 8 8 L 4 8 L 4 10 L 8 10 L 8 24 L 22 24 L 22 28 L 24 28 L 24 24 L 28 24 L 28 22 L 22 22 L 11.44 22 L 10 22 L 10 20.56 L 10 10 L 10 4 L 8 4 z M 12 8 L 12 10 L 22 10 L 22 20 L 24 20 L 24 8 L 12 8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCropAltSolid;
