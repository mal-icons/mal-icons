import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ink-eraser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrInkEraser {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M678-220h173q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T851-160H618l60-60Zm-486 60q-5.91 0-11.46-2Q175-164 170-169l-72-75q-18-17-17.5-41.5T97-327l458-498q16-17 40.57-17 24.57 0 41.43 17l205 215q17 17 18 42t-16 42L512-170q-4.55 5-10.24 7.5-5.69 2.5-11.76 2.5H192Zm288-60 324-352-207-217-455 503 64 66h274Zm0-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrInkEraser;
