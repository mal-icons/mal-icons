import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-send-and-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSendAndArchive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m690-156 113-113-21-21-77 77v-171h-30v171l-77-77-21 21 113 113Zm-570-4v-640l664 280h-59q-24 0-45.5 1t-37.5 4L180-710v168l242 62-242 60v167l282-118q-8 17-13.5 39.5T441-295L120-160Zm570 80q-78 0-134-55.5T500-269q0-79 56-135t134-56q78 0 134 56t56 135q0 78-56 133.5T690-80ZM180-371v-339 457-118Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSendAndArchive;
