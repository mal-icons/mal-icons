import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cell-merge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCellMerge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M159.82-610Q147-610 138.5-618.62T130-640v-130q0-24.75 17.63-42.37T190-830h130q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T320-770H190v130q0 12-8.68 21-8.68 9-21.5 9Zm640 0Q787-610 778.5-618.62T770-640v-130H640q-12 0-21-8.68-9-8.68-9-21.5 0-12.82 8.63-21.32T640-830h130q24.75 0 42.38 17.63T830-770v130q0 12-8.68 21-8.68 9-21.5 9ZM652-362l-97-97q-9-9-9-21t9-21l97-97q8.8-9 20.9-9 12.1 0 21.1 9 9 9 9.5 21.5T695-555l-46 45h191q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T840-450H649l46 46q9 9 8.5 21t-9.34 21q-8.84 9-21 9T652-362Zm-386.12-0.05q-9.12-9.05-9.5-21.5Q256-396 265-405l46-45H120q-12 0-21-8.68-9-8.68-9-21.5Q90-493 98.63-501.5T120-510h191l-46-46q-9-8.8-8.5-20.90.5-12.1 9.5-21.1 9-9 21-9t21 9l97 97q9 9 9 21t-9 21l-97 97q-9 9-21 9t-21.12-9.05ZM190-130q-24.75 0-42.37-17.62T130-190v-130q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T190-320v130h130q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T320-130H190Zm450 0q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T640-190h130v-130q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T830-320v130q0 24.75-17.62 42.38T770-130H640Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCellMerge;
