import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-barcode-scanner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBarcodeScanner {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-182h60v122h122v60H40Zm697 0v-60h122v-122h60v182H737ZM153-231v-499h80v499h-80Zm121 0v-499h42v499h-42Zm122 0v-499h83v499h-83Zm125 0v-499h121v499H521Zm163 0v-499h42v499h-42Zm83 0v-499h38v499h-38ZM40-658v-182h182v60H100v122H40Zm819 0v-122H737v-60h182v182h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBarcodeScanner;
