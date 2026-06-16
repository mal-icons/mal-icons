import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-warning-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWarningOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M483.83-237Q471-237 462.5-245.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5ZM454-348v-158l60 60v98h-60Zm459 216L749-296 480-760l-72 123-43-44 115-199 433 748Zm-769-48h550L346-528 144-180ZM837-37l-83-83H40l262-452L37-837l43-43L880-80l-43 43ZM520-354Zm58-113Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWarningOff;
