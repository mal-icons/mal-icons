import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-austral-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaAustralSign {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7L122.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0L82.7 320 32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l24 0L34.5 435.7c-6.8 16.3 0.9 35 17.2 41.8s35-0.9 41.8-17.2L125.3 384l197.3 0 31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8L392 384l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0L352 288l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-90.7 0L253.5 51.7zM256 224l-64 0 32-76.8L256 224zm-90.7 64l117.3 0L296 320l-144 0 13.3-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaAustralSign;
