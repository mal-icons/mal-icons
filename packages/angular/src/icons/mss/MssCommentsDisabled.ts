import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-comments-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCommentsDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-240v-554l-54-54 43-43L876-84l-43 43-199-199H80Zm800 74L746-300h74v-520H226l-60-60h714v714ZM140-300h434L474-400H240v-60h174l-70-70H240v-60h44L140-734v434Zm506-100-60-60h134v60h-74ZM516-530l-60-60h264v60H516ZM386-660l-60-60h394v60H386Zm-29 143Zm129-43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCommentsDisabled;
