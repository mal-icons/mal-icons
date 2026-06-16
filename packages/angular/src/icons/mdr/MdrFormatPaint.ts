import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-paint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatPaint {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 4V3c0-0.55-0.45-1-1-1H5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1V6h1v4h-9c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-9h7c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatPaint;
