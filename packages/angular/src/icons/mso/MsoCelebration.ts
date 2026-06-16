import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-celebration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCelebration {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m80-80 186-520 337 333L80-80Zm101-101 314-112-203-204-111 316Zm376-264-34-34 240-240q32-32 81-32.5t81 31.5l17 17-34 34-19-19q-19-19-44-19.5T800-688L557-445ZM398-600l-34-34 30-30q23-23 21.5-52.5T394-766l-28-28 34-34 26 26q35 35 34.5 87.5T425-627l-27 27Zm81 77-34-34 152-152q19-19 18.5-48.5T596-806l-61-61 34-34 63 63q31 32 32 80.5T633-677L479-523Zm158 159-34-34 47-47q35-35 84-36t84 34l51 51-34 34-52-52q-23-23-48-23t-48 23l-50 50ZM181-181Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCelebration;
