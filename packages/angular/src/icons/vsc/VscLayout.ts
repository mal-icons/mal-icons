import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-layout",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLayout {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.5 1C6.33 1 7 1.67 7 2.5V13.5C7 14.33 6.33 15 5.5 15H2.5C1.67 15 1 14.33 1 13.5V2.5C1 1.67 1.67 1 2.5 1H5.5ZM2.5 2C2.23 2 2 2.23 2 2.5V13.5C2 13.78 2.23 14 2.5 14H5.5C5.78 14 6 13.78 6 13.5V2.5C6 2.23 5.78 2 5.5 2H2.5Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.5 9C14.33 9 15 9.67 15 10.5V13.5C15 14.33 14.33 15 13.5 15H10.5C9.67 15 9 14.33 9 13.5V10.5C9 9.67 9.67 9 10.5 9H13.5ZM10.5 10C10.23 10 10 10.23 10 10.5V13.5C10 13.78 10.23 14 10.5 14H13.5C13.78 14 14 13.78 14 13.5V10.5C14 10.23 13.78 10 13.5 10H10.5Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.5 1C14.33 1 15 1.67 15 2.5V5.5C15 6.33 14.33 7 13.5 7H10.5C9.67 7 9 6.33 9 5.5V2.5C9 1.67 9.67 1 10.5 1H13.5ZM10.5 2C10.23 2 10 2.23 10 2.5V5.5C10 5.78 10.23 6 10.5 6H13.5C13.78 6 14 5.78 14 5.5V2.5C14 2.23 13.78 2 13.5 2H10.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLayout;
