import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-megaphone-simple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhMegaphoneSimple {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-0.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM128,165,40,192V48l88,27Zm48,27H144V176.82L176,167Zm40-54-0.11,0L144,160.08V79.92l71.89,22,0.11,0v36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhMegaphoneSimple;
