import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-bar-chart-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBarChartSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"496 496 16 496 16 16 48 16 48 464 496 464 496 496"}],["path",{"d":"M192,432H80V208H192Z"}],["path",{"d":"M336,432H224V160H336Z"}],["path",{"d":"M479.64,432h-112V96h112Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBarChartSharp;
