import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlag {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M229.83-120Q217-120 208.5-128.62T200-150v-620q0-12.75 8.63-21.37T230-800h289q10.5 0 18.75 6.5T548-776l14 62h208q12.75 0 21.38 8.63T800-684v310q0 12.75-8.62 21.38T770-344H568q-10.5 0-18.75-6T539-367l-14-62H260v279q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM500-572Zm95 168h145v-250H511l-19-86H260v251h316l19 85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlag;
