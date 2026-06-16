import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-houseboat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHouseboat {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-200v-61q35-4 56.5-21.5T206-300q51 0 76 20t61 20q37 0 63-20t74-20q51 0 75.5 20t62.5 20q35 0 60-20t76-20q48 0 69.5 17.5T880-261v61q-39-2-67-21t-60-19q-37 0-62 20t-74 20q-50 0-74.5-20T480-240q-37 0-61.5 20T344-200q-50 0-74.5-20T207-240q-32 0-59 19t-68 21Zm104-160-80-80 42-42 63 62h81v-186l-61 44-35-48 286-210 286 210-35 49-61-45v186h81l63-62 42 42-80 80H184Zm166-60h100v-80h60v80h100v-230l-130-95-130 95v230Zm0 0h260-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHouseboat;
