import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-layers-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLayersSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"480 150 256 48 32 150 256 254 480 150"}],["polygon",{"points":"255.71 392.95 110.9 326.75 32 362 256 464 480 362 401.31 326.7 255.71 392.95"}],["path",{"d":"M480,256l-75.53-33.53L256.1,290.6,107.33,222.43,32,256,256,358,480,256S480,256,480,256Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLayersSharp;
