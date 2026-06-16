import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-architecture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssArchitecture {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m269-120-9-66 127-350q11 11 24.5 18t28.5 12L317-167l-48 47Zm422 0-48-47-125-338q15-5 29-12t25-18l128 349-9 66ZM480-520q-50 0-85-35t-35-85q0-42 24.5-74.5T450-756v-84h60v84q41 9 65.5 41.5T600-640q0 50-35 85t-85 35Zm0-60q25 0 42.5-17.5T540-640q0-25-17.5-42.5T480-700q-25 0-42.5 17.5T420-640q0 25 17.5 42.5T480-580Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssArchitecture;
