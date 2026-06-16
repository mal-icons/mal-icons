import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-stylus-laser-pointer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssStylusLaserPointer {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-80q-46 0-78-32t-32-78q0-46 32-78t78-32q46 0 78 32t32 78q0 46-32 78t-78 32Zm169-132q-6-46-33.5-81.5T427-346l132-134H226q-29 0-47.5-23T160-556q0-18 9-33t24-24l498-300q14-9 30.5-4.5T746-899q8 14 4.5 30.5T733-844L314-590h420q27 0 46.5 19.5T800-524q0 17-4 32.5T781-465L529-212Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssStylusLaserPointer;
