import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flip-to-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlipToFront {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-432v-84h60v84h-60Zm0 168v-84h60v84h-60Zm0 144v-60h60v60h-60Zm0-479v-84h60v84h-60Zm480 479v-60h84v60h-84ZM264-264v-576h576v576H264Zm60-60h456v-456H324v456Zm108 204v-60h84v60h-84Zm-168 0v-60h84v60h-84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlipToFront;
