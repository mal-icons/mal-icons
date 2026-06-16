import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-format-paint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFormatPaint {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4h10v2H6z","opacity":".3"}],["path",{"d":"M17 2H5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1V6h1v4H9v11c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-9h8V4h-3V3c0-0.55-0.45-1-1-1zm-1 4H6V4h10v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFormatPaint;
