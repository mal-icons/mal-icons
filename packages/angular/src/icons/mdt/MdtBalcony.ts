import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-balcony",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBalcony {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 16H5v4h2v-4zm4 0H9v4h2v-4zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10zm4 2H8v-2h2v2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92zM16 12h-2v-2h2v2zm-1 4h-2v4h2v-4zm4 0h-2v4h2v-4z","opacity":".3"}],["path",{"d":"M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBalcony;
