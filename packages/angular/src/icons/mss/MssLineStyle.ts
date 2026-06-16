import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-line-style",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLineStyle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-160v-60h60v60h-60Zm0-120v-60h209v60H120Zm0-120v-60h330v60H120Zm0-120v-280h720v280H120Zm165 360v-60h60v60h-60Zm90-120v-60h210v60H375Zm75 120v-60h60v60h-60Zm60-240v-60h330v60H510Zm105 240v-60h60v60h-60Zm16-120v-60h209v60H631Zm149 120v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLineStyle;
