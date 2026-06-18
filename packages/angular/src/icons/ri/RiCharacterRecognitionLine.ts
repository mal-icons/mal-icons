import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-character-recognition-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCharacterRecognitionLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 15V19H9V21H3V15H5ZM21 15V21H15V19H19V15H21ZM13 6L17.4 17H15.24L14.04 14H9.95L8.75 17H6.6L11 6H13ZM12 8.89L10.75 12H13.24L12 8.89ZM9 3V5H5V9H3V3H9ZM21 3V9H19V5H15V3H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCharacterRecognitionLine;
