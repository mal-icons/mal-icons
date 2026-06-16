import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-format-bold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFormatBold {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M275-200v-560h228q66 0 114.5 42T666-612q0 38-21 70t-56 49v6q43 14 69.5 50t26.5 81q0 68-52.5 112T510-200H275Zm86-76h144q38 0 66-25t28-63q0-37-28-62t-66-25H361v175Zm0-247h136q35 0 60.5-23t25.5-58q0-35-25.5-58.5T497-686H361v163Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFormatBold;
