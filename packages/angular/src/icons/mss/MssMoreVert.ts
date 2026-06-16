import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-more-vert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMoreVert {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.86-160Q460-160 446-174.14q-14-14.14-14-34Q432-228 446.14-242q14.14-14 34-14Q500-256 514-241.86q14 14.14 14 34Q528-188 513.86-174q-14.14 14-34 14Zm0-272Q460-432 446-446.14q-14-14.14-14-34Q432-500 446.14-514q14.14-14 34-14Q500-528 514-513.86q14 14.14 14 34Q528-460 513.86-446q-14.14 14-34 14Zm0-272Q460-704 446-718.14q-14-14.14-14-34Q432-772 446.14-786q14.14-14 34-14Q500-800 514-785.86q14 14.14 14 34Q528-732 513.86-718q-14.14 14-34 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMoreVert;
